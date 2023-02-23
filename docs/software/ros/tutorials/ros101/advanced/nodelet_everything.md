---
title: Nodelet Everything
sidebar_label: Nodelet Everything
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Nodelets are vital for squeezing more performance out of ROS,
particularly for vision, control, or other high-frequency and/or
bandwidth applications. Why not make everything a nodelet? In this ROS
tutorial, you'll learn how to incorporate nodelets into your code.

## Starting Out

It's surprisingly easy to write Nodelet-friendly code when you do it
from the start. The best thing to do right away is set up a nodelet
library and a wrapping node executable that can be run standalone. You
will notice that thanks to pluginlib, you don't even need to link your
node executable against your nodelet library in CMakeLists. See the
reference code below, ripped mostly from
https://github.com/clearpathrobotics/zbar_ros. Names and such are
templated with a @(\...) scheme.

## But Why?

The primary advantage is the automagic zero-copy transport between
nodelets (in one nodelet manager). This means that the pointcloud
created by a hardware driver doesn't need to get copied or serialized
before it hits your code, assuming you inject the nodelet into the
camera's manager, saving you time and trouble.

You get all the modularity of nodes, and all the efficiency of having
one monolithic process. This makes nodelets more flexible than bare
plugins (via pluginlib) - you can implicitly tap into any of the
intra-process communication that occurs.

## Caveats

The requirement for zero-copy transport to work is that you subscribe
with a ConstPtr callback, and don't modify the message on the publisher
side after publishing, see nodelet code below.

The earliest you can get a NodeHandle is inside the onInit() method.
Don't try to do anything ROS related in the constructor. If one nodelet
goes down, the whole manager goes down. Check for exceptions.

To obey the Nodelet API, you shouldn't manually manage threads. But you
were always using ros::Timer callbacks like you're supposed to anyways,
right? Callbacks on NodeHandles from the Nodelet API get managed by a
shared threadpool, which is way more efficient.

ROS_DEBUG and friends no longer work - use the equivalent NODELET_DEBUG.
Sadly this precludes sharing code implementation with debug messages
between Nodes and Nodelets, which is why we use a dynamic wrapping Node
below.

You don't actually NEED the wrapping node - you can run the nodelet
with [nodelet standalone pkg/nodelet]{.title-ref}. However this
precludes using [rosrun pkg node]{.title-ref}, which is very
user-friendly.

Now that I've convinced you, please read the rest of the nodelet docs:

- http://wiki.ros.org/nodelet
- http://wiki.ros.org/roscpp/Overview/Publishers%20and%20Subscribers#Intraprocess_Publishing

## And Now, Code:

The @(\...) format below may be familiar to anyone who's used empy.
Just replace each tag with your string of choice!

**Node Code:**

```c++
#include "ros/ros.h"
#include "nodelet/loader.h"

int main(int argc, char **argv){
  ros::init(argc, argv, "@(node)");
  nodelet::Loader nodelet;
  nodelet::M_string remap(ros::names::getRemappings());
  nodelet::V_string nargv;
  std::string nodelet_name = ros::this_node::getName();
  nodelet.load(nodelet_name, "Package/Nodelet", remap, nargv);
  ros::spin();
  return 0;
  }
```

**Nodelet Code:**

```c++
#include "ros/ros.h"
#include "nodelet/nodelet.h"

namespace Namespace
{

  class NodeletClass : public nodelet::Nodelet
  {
  public:
  NodeletClass();

  private:
  virtual void onInit(){
  nh = getNodeHandle();
  private_nh = getPrivateNodeHandle();
  timer_ = nh.createTimer(ros::Duration(1.0), boost::bind(& NodeletClass::timerCb, this, _1));
  sub_ = nh.subscribe("incoming_chatter", 10, boost::bind(& NodeletClass::messageCb, this, _1));
  pub_ = private_nh.advertise<std_msgs::String>("outgoing_chatter", 10);
  };

  void timerCb(const ros::TimerEvent& event){
  // Using timers is the preferred 'ROS way' to manual threading
  NODELET_INFO_STREAM("The time is now " << event.current_real);
  }

  // must use a ConstPtr callback to use zero-copy transport
  void messageCb(const std_msgs::StringConstPtr message){

  // can republish the old message no problem, since we're not modifying it
  pub_.publish(message);

  std_msgs::String new_message;
  new_message.data = message.data + " fizz buzz";
  pub_.publish(new_message);

  // we can't modify any messages after they've been published, unless we want our subscribers to get VERY confused
  // new_message.data = "can't do this!";
   }

  ros::Subscriber sub_;
  ros::Publisher pub_;
  ros::Timer timer_;
  };

} // namespace Namespace

PLUGINLIB_DECLARE_CLASS(Package, NodeletClass, Namespace::NamespaceClass, nodelet::Nodelet);
```
