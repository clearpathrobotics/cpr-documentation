# cpr-documentation


<br/>

## About

This repository holds the source of Clearpath Robotics technical documentation, including:

- hardware user manuals
- hardware maintenance manuals
- software configuration guides
- software changelogs, and instructions for updating robots
- ROS tutorials

The source files in this repository are built and deployed as docs.clearpathrobotics.com using AWS Amplify.

<br/>

> [!TIP]
> The `Contributing` tab at the top of this page details how to update our public documentation website, <docs.clearpathrobotics.com>

> [!NOTE]
> Clearpath developers can submit an IAM request through AWS to get access to the AWS Amplify console.
> Our AWS organization name is `aws_0042_clearpath_robotics`.
> A Clearpath administrator will discuss the request with you through our internal messaging tools, _(not email)_, to confirm this is not an external phishing attempt.

> [!IMPORTANT]
> After logging into the AWS console for `aws_0042_clearpath_robotics`, confirm that you have selected the `Ohio us-east-2` data centre in the top right dropdown.


<br/>

## Links to the deployed website:

- [_production_ branch](https://docs.clearpathrobotics.com)
- [_development_ branch](https://development.dfy90wyu8dics.amplifyapp.com/)


<br/>

## Tools used:

1.  [Node.js](https://nodejs.org/en/)
2.  [Docusaurus](https://docusaurus.io/) _by Facebook / Meta_
3.  [AWS Amplify](https://aws.amazon.com/amplify/)
4.  _Full list detailed in the file `./package.json` as dependencies and devDependencies_


<br/>

## Steps to run this on your computer locally:

1.  System dependencies, common to most web development
    1.  VS code, or similar editor
        - Extension: _Git Lens_
        - Extension: _Prettier_
        - Extension: _MDX_
    2.  Terminal configured to work with this GitHub repository
    3.  Node.js (22.x or newer) is installed
        1.  To install `nodejs` LTS (22.x currently) on Ubuntu run: `curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt-get install -y nodejs`
        2.  For all other platforms use: https://nodejs.org/en/download
2.  Clone this repository,

        git clone https://github.com/clearpathrobotics/cpr-documentation.git

3.  Open the folder
4.  In a terminal, navigate to the root of the project folder and run `npm install`
5.  Start the local server by running `npm run start`
6.  A new tab should open in your preferred web browser once the site is running.
    Your terminal session should show the port the webpage is running on.
    The default address is http://localhost:3000/ but this may change if you are already using that port for another site.
7.  If you want to test something on a mobile screensize; you can do this within your desktop's Chrome browser.

    <details>
      <summary>Click to expand, for Chrome's mobile screensize instructions</summary>

      When the site is running locally; enter Chrome's developer tools by selecting:
        The _vertical ellipsis (3 dots) in the top right_ → _More tools_ → _Developer tools_.
      You can then select the _Device Toolbar_ button, and change the screensize, as shown in the two images below.
      We are designing to a smallest screen width of 320 px.

      <img src="/static/img/readme_images/readme_chrome_developer_1.png" width="800"/>
      <br />
      <img src="/static/img/readme_images/readme_chrome_developer_2.png" width="800"/>
    </details>


<br/>

## Website routing, DNS, and expired certificates

Our main site is www.clearpathrobotics.com.
We have an onsite DNS that directs requests to the main website, as well as to our subdomains like docs.clearpathrobotics.com.
Clearpath's IT team maintains this DNS, and is responsible for updating CNAME and SSL certificate configuration settings.

> [!NOTE]
> Refer to Jira ticket SES-11130 for an template of getting these configuration settings updated.


<br/>

## AWS configuration settings

<details>
 <summary>Click to expand for <b>build settings with amplify.yml</b></summary>
 
 - `version 1` is a Amplify configuration flag, it does not refer to revision control of the text file.
 - This includes a build command for `--no-minify`.
   This was added because AWS was changing the website's CSS, causing the header automatic numbering not to render correctly.
   > **NOTE**
   > 
   > The header automatic numbering CSS is detailed in this repository's file `./src/css/custom.css`, in the sections `h2::before`, `h3::before` ...

</details>

<details>
 <summary>Click to expand for <b>customHttp.yml and CSP content security policy</b></summary>
 
 This repository's file `./customHttp.yml` was added to align with Rockwell Automation's web security policies.
 Testing methods and reasoning for the change are detailed in the Jira ticket RPSW-2903.
    
</details>

<details>
  <summary>Click to expand for <b>Node.js version</b></summary>
 
  Node.js releases long term stable versions every few years.
  AWS supports some of these LTS version, but you will need to confirm with their documentation.
  This repository and the AWS Amplify configuration will need to be updated every few years to continue using supported versions of Node.js.
  These are the files that need to be updated:
 
  - This repository's file, `/package.json`.
  - This repository's file, `./README.md`.
  - AWS Amplify's "Build Settings ⟶ Advanced Settings".
    > **NOTE**
    > 
    > At the time of writing in 2026-May, AWS needs to be explicitly told what version of Node.Js to use;
    > it does not read the configuration detailed in the repository's `package.json`.
    
</details>
