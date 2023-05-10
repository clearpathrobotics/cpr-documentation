# cpr-documentation

## Links to the deployed website:

- [_production_ branch](https://docs.clearpathrobotics.com)
- [_development_ branch](https://development.dfy90wyu8dics.amplifyapp.com/)

## Tools used:

1.  [Node.js](https://nodejs.org/en/)
2.  [Docusaurus](https://docusaurus.io/) _by Facebook / Meta_
3.  [GitHub](https://github.com/)
4.  [AWS Amplify](https://aws.amazon.com/amplify/)

## Steps to run this on your computer locally:

1.  System dependencies, common to most web development
    1.  VS code, or similar editor
        - Extension: _Git Lens_
        - Extension: _Prettier_
        - Extension: _MDX_
    2.  Terminal configured to work with this GitHub repository
    3.  Node.js is installed
2.  Clone this repository,

        git clone https://github.com/clearpathrobotics/cpr-documentation.git

3.  Open the folder
4.  In a terminal, navigate to the root of the project folder and run `npm install`
5.  Pull the AWS configuration settings to your local machine by running 
    ```
    amplify pull --appId dfy90wyu8dics --envName staging`
    ```
    This should open a tab in your web browser, asking for permission to connect Amplify Studio to the Amplify CLI (command line interface).
    After responding yes, return to the terminal and answer a few more questions to configure your local machine:
    ```
    ? Choose your default editor:                     Visual Studio Code
    ? Choose the type of app that you're building     javascript  
    ? What javascript framework are you using         react
    ? Source Directory Path:                          .
    ? Distribution Directory Path:                    build
    ? Build Command:                                  npm run build
    ? Start Command:                                  npm run start
    ? Do you plan on modifying this backend?          No
    ```
6.  Start the local server by running `npm run start`
7.  A new tab should open in your prefered web browser once the site is running.
    Your terminal session should show the port the webpage is running on.
    The default address is http://localhost:3000/ but this may change if you are already using that port for another site.
8.  If you want to test something on a mobile screensize; you can do this within your desktop's Chrome browser.
    When the site is running locally; enter Chrome's developer tools by selecting: _3 dots in the top right_ → _More tools_ → _Developer tools_.
    You can then select the _Device Toolbar_ button, and change the screensize, as shown in the two images below.
    We are designing to a smallest screen width of 320 px.

    <img src="/static/img/readme_images/readme_chrome_developer_1.png" width="800"/>

    <br />

    <img src="/static/img/readme_images/readme_chrome_developer_2.png" width="800"/>

## Workflow for making updates:

1.  Clone or fork this repository,

        git clone https://github.com/clearpathrobotics/cpr-documentation.git`

2.  Create a branch from development. with a name indicating the purpose, such as _feature_xxxxxx_
3.  Make changes to the relevant files
4.  Test using your local server, using the steps mentioned [Steps to run this on your computer locally](##-steps-to-run-this-on-your-computer-locally)
5.  When ready, enter `ctrl-c` in your terminal to stop the server. Then run `npm run build` to test that the site builds corretly.
6.  Resolve any errors that the terminal reports, and rerun the command `npm run build`.
7.  Finally, check that your updates adhere to our code formatting standard, by running the command `npm run format-check`.
    The terminal will either report:
    - _All matched files use Prettier code style!_
    - _Code style issues found in the above file(s). Forgot to run Prettier?_
      You can fix the errors by running the command `npm run format-write`.
      This format all the files in the repository, and save them automatically.
      - Refer to the _package.json_ to understand what this script calls.
      - Refer to the _.prettierrc.json_ to understand the rules Prettier is using when checking files.
      - Alternativaly, you can format a single file by running `npx prettier --write <FILE PATH>`, such as `npx prettier --write README.md`
8.  You will need to confirm that `npm run format-write` code formatting did not make any functionality changes to your _.mdx_ documentation.
    You may see files that claim to be updated in Source Control, but don't have any visible changes.
    You should run these commands in your terminal to prevent Git from noting these types of changes:

        git config --global core.filemode false
        git config --global core.autocrlf false

9.  When ready, publish your branch on GitHub, and submit a Pull Request to merge your changes into the _development_ branch.
    Pull Requests to the _production_ branch will not merged.
    Also note that this GitHub repository has branch protection rules, that prevent you from committing directly to _production_ and _development_.

    <img src="/static/img/readme_images/readme_github_1.png" width="467"/>

10. The administrators of this documentation will review the website for any functional issues,
    and will periodically merge the latest commits in the _development_ branch into the _production_ branch.

## Workflow for publishing OutdoorNav User Manual updates

The OutdoorNav User Manual is a "versioned" document, which means that a snapshot of the content is
made to align with a release. This allows users to access version-specific copies of the
documentation.

### Development Phase

During the development phase, follow steps 1-10 of the workflow above. Note that the updates will not affect
the default view of the user manual, only the "next" version of the manual
(eg. http://docs.clearpathrobotics.com/docs_outdoornav_user_manual/next/index).

### Release Phase

When it is time to publish a numbered release of the user manual:

1.  Create a branch from _development_ with a name indicating the purpose, such as _release_xxxxxx_
2.  Run the versioning command, where _new_version_ is aligned with the corresponding software release:

        npm run docusaurus docs:version:outdoornav_user_manual <new_version>

3.  Update /docs/software/navigation_packages.mdx to:
    - Update the version number for the "Latest".
    - Add an entry for the previous release.
4.  Update /static/versions.js to update the outdoornav version to match the GitHub tag.
5.  Build and test the changes (see steps 4-8 from the standard workflow above).
6.  When ready, publish your branch on GitHub, and submit a Pull Request to merge your changes into the _development_ branch.
    Be sure to include the updates to the following:
    - outdoornav_user_manual_versioned_docs/
    - outdoornav_user_manual_versioned_sidebars/
    - outdoornav_user_manual_versions.json

## Workflow for publishing OutdoorNav User Manual updates

Follow the steps for the OutdoorNav User Manual workflow above, replacing
**outdoornav** with **indoornav**.

## How should I write pages?

1.  Refer to [Markdown's guide](https://www.markdownguide.org/basic-syntax/) for syntax
2.  Refer to [Docusaurus's guide](https://docusaurus.io/docs/next/markdown-features) for supported Markdown features
3.  For advanced users, refer to [Markdown MDX](https://mdxjs.com/) for adding React Components to a Markdown file
4.  for advanced users, you may create React pages using _.js_ or _.ts_ file types

## How should I name files?

All files should use lowercase letters for their names and file extensions.
Our website's server is case sensitive, so it requires files case to match how it is called in your Markdown files.
Your Windows build commands may not catch these issues since Windows is not case sensitive.
Using lowercase letters minimizes the number of build issues.

- Good: `controller_1.png`
- Bad: `Controller_1.png`
- Bad: `controller_1.PNG`

Downloadable assets like PDFs should say _clearpath_robotics_ at the start of the name.
This helps User's know where they downloaded the file from later, as the asset is saved to their _Downloads_ folder.

## Where should I place files?

1.  Markdown page

        /docs

2.  Markdown component, like a section to be reused in multiple pages

        /components

3.  Images

        /static/img

4.  PDFs and similar customer facing files

        /static/assets

## How does the deployed website get updated?

We have this site deployed on _AWS Amplify_.
Their server is monitoring the _production_ and _development_ branches of this repository.
When AWS sees a new commit on either branch, it will rebuild the site.
The image below shows the _development_ branch rebuilding after the GitHub branch was updated by a Pull Request.

<img src="/static/img/readme_images/readme_aws_1.png" width="800"/>

This example took 2 minutes and 14 seconds to deploy.
If your _feature_ branch change is large, we can deploy it as a temporary site on AWS to confirm that it builds before submitting a Pull Request into Development.
The downsides of deploying more branches are:

- Possible time lost, though this may save time by preventing build errors on the _production_ branch
- A small cost to AWS for using their Server.
  At the time of writing (May 2022), [AWS charges](https://aws.amazon.com/amplify/pricing/) $0.01 USD per build minute.

## Structure for pages

You can find templates in the directory _/static/reference_pages_

## Equations

You can add equations using [KaTex syntax](https://katex.org/docs/supported.html).
The packages have are installed in the _package.json_ and imported into the project in _docusaurus.config.js_.
You simply need to add your equations to your Markdown file, keeping all the elements between opening an closing tags _$_.

$$
\omega=\cfrac{v_{r}-v_{l}}{w}
$$

You can test equation syntax using [this tool](https://katex.org/) from KaTex.

## Image formatting

We want images to convey information.
The best way to do this is to have a consistent method notating images, and removing unnecessary content.
The list below are not strict rules, but are considered good practice to keep images throughout the site looking consistent,

1.  Highlight colours should be:
    1.  Primary
        - #BB0000
        - RGB (187, 0, 0)
    2.  Secondary
        - #00C7A6
        - RGB (0, 199, 166)
    3.  Tertiary
        - #4E7FFF
        - RGB (78, 127, 255)
2.  Remove background colours when possible.
    This helps Users that have set the site to Dark Mode.
    Refer to _SolidWorks image exports_ for the process of creating these images.
3.  Avoid embedding text in images.
    This prevents Users from translating the webpage.
    Consider using arrows and circles to notate images, with the text included in your Markdown file.

    Note: icons, logos, and symbols that are part of the physical product are exempt from this suggestion.

## SolidWorks image exports

1.  Open your assembly in SolidWorks.
    Orient the model to the view you want to capture.
    Click _File_ → _Save-As_.

    <img src="/static/img/readme_images/readme_solidworks_image_1.png" width="800"/>

2.  Select _.png_ as the file type.
    Then click the _Options_ button.

    <img src="/static/img/readme_images/readme_solidworks_image_2.png" width="800"/>

3.  Make sure the _Remove background_ box has a check mark.
    Click the _Print capture_ box, so you can manually choose the image's width and height.

    <img src="/static/img/readme_images/readme_solidworks_image_3.png" width="800"/>

4.  In the same window as Step 3; scroll down to the bottom.
    Change the _Width_ and _Height_ fields to adjust the bounding box around the SolidWorks model.
    300 mm tall should be a good balance between image resolution and file size.

    Finally, select _OK_, and _Save_

    <img src="/static/img/readme_images/readme_solidworks_image_4.png" width="800"/>

## Authentication

Our website uses AWS Authenticator to allow a user to login.
We have intentionally removed the fields to allow a user to sign up, since we intend to manage access by invitation only.
To login, the user clicks the Sign In button at the bottom of the page, and enters their username and password.

### How we authenticate a user's credentials

Most of the functionality is added in this repository's file `/src/theme/Root.js`.
Root.js is Docusaurus's way to change application functionality, similar to App.js in a standard React application.
In Root.js's return section, `<Authenticator>` may be added to the DOM, based on some binary State checks.
When `<Authenticator>` is added to the DOM, a popup will appear in the centre of the user's screen, asking for login credentials.

[Authenticator](https://ui.docs.amplify.aws/react/connected-components/authenticator) is a user interface component.
The actual sign in and getting user information from the AWS database is done with `Auth`.
Root.js is configured to get database configuration details using:

```
import awsExports from '/aws-exports';
```

Once the user has signed in, we use methods from `Auth` to review the user's infromation stored in the database.
The main thing that we are checking is what `groups` the user is assigned to.

### How a user gets routed to hidden content

`Authenticator` and `Auth` handle the login.
We then use our components `BlockedPageRouting` and `InjectPrivilegedContent` to decide what gets pushed to the DOM.
You can find these components in `/components_hidden/authentication`.

You can see these components being used on the page `/docs/tools/documentation`.

### Where to put hidden source files

Content that you want to hide should either be placed in:

- `docs_hidden` for full pages.
  Note that these are [Docusaurus Pages](https://docusaurus.io/docs/creating-pages), rather than [Docusaurus Docs](https://docusaurus.io/docs/create-doc).
  The main differences being that Pages do not get built into a tree structure, and do not have a table-of-contents.
- `components_hidden` for snippets of content, to call into an existing page.
- Images go in the standard location `/static/img`. 
  Images were not considered sensitive during the development of these authentication tools.
  This means users can access any image through a URL, even if they are not logged in.
  For example: https://docs.clearpathrobotics.com/img/robot_images/husky_images/husky_banner.png

Anything in `docs_hidden` will need a 2 file structure, similar to the examples in `/docs_hidden/hiddenPageExample`.
This 2 file structure is required by our `BlockedPageRouting` component, to prevent unpriviliged users from accessing the data through their browser's developer tools. 
### Caution

`aws-exports` is a file that gets created during the Docusaurus build.
This file includes database configuration details which are necessary for `Auth` to connect to the AWS database.
It is important that `aws-exports.js` does not get shared publicily, since this would allow someone to access our user data.

- Keep `aws-exports.js` in the `.gitignore` file
- Do not run `amplify pull` on a local server that is being shipped to a customer (like a robot).
  `amplify pull` should only be run on our development computers, when we intend to make changes to this repository.
- Do not publish the contents of `aws-exports.js` publicly (emails, GitHub comments, Support tickets).

### Giving a user login credentials

1.  Login to AWS.

2.  Confirm that you are connected to the Ohio datacenter.

3.  Select the Cognito application (you may need to use the serch bar).

    <img src="/static/img/readme_images/readme_aws_homepage_to_cognito.png" width="800"/>

4.  Select the link for the `cprdocumentation-staging` data.

    <img src="/static/img/readme_images/readme_aws_cognito_landing.png" width="800"/>
    
5.  Select the _Create user_ button.

    <img src="/static/img/readme_images/readme_aws_cognito_cprdocumentation_staging.png" width="800"/>

6.  Fill in the user's information, and then select the _Create user_ button.

    <img src="/static/img/readme_images/readme_aws_cognito_create_user.png" width="800"/>

7.  You will be routed back to the Cognito homepage.
    Find the new entry in the Users list, and click on the hyperlink for that new user.

    <img src="/static/img/readme_images/readme_aws_cognito_landing_new_user.png" width="800"/>

8.  Click the _Add user to a group_ button.
    <img src="/static/img/readme_images/readme_aws_cognito_add_user_to_a_group.png" width="800"/>

9.  Select the _trusted_ group, and then click the _Add_ button.
    <img src="/static/img/readme_images/readme_aws_cognito_trusted_group.png" width="800"/>

### Deleting a user

1.  Follow steps 1 - 4 from above, to get to the `cprdocumentation-staging` landing page.

2.  Select the user from the list, and then click the _Delete user_ button.

    <img src="/static/img/readme_images/readme_aws_cognito_delete_user.png" width="800"/>

3.  Confirm the popup that you want to disable access, and delete the user information.
