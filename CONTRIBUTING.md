# Contributing to Clearpath Robotics documentation

We appreciate your interest in improving Clearpath Robotics documentation.
This page is intended for Clearpath Robotics employees, but we also welcome public contributions.
Even small changes like fixing a typo help keep our documentation accurate and accessible for the entire robotics community.


<br/>

## How to update the public website

> [!NOTE] 
> Refer to the Workflow section for making updates to the _development_ branch.

This section explains how to push the latest state of the _development_ branch to the _production_ branch.
Updating the _production_ branch will trigger AWS Amplify to rebuild the website, and deploy the latest version to docs.clearpathrobotics.com.

Follow this process to keep the _development_ and _production_ branches aligned, without adding many unnecessary commits:

1.  Confirm that _development_ is in an acceptable state, and ready to get pushed to _production_.
2.  Create a pull request in GitHub, to merge _development_ into _production_.
3.  One of the GitHub repository's administrators will review the Pull Request, and merge it using the Create-a-Merge-Commit option.
    > **NOTE**
    > 
    > You should not use the Squash-and-Merge option here, otherwise _production_ will not have the latest commits from _development_, which were created in step 1 of this list.
    > The source data will be the same on the 2 branches, but the commit hashes will not be aligned.
    > The Create-a-Merge-Commit option prevents this issue, by adding all the commits from _development_ to _production_, and also adding a commit to _production_ that mentions the Pull Request.

4.  _production_ has been updated, but it is one commit ahead of _development_.
    We want to update _development_ so we do not experience rebase issues next time we want to update the _production_ branch.
    The GitHub Administrator will update _development_ using VS Code:
    1.  Pull the latest remote data to local _production_.
    2.  Pull the latest remote data to local _development_.
    3.  Switch to their local _development_ branch.
    4.  Run `git rebase production`.
        This should pull one commit into _development_.
        It should be the commit related to merging the Pull Request.
    5.  Force Push this commit to the _development_ branch on GitHub.
        > **NOTE**
        > 
        > The GitHub repository's branch protection rules only allow Administrators and Owners to Force Push to the _production_ and _development_ branches.


<br/>

## How does the deployed website get updated?

The public site is deployed with _AWS Amplify_.
AWS is monitoring the _production_ and _development_ branches of this repository.
When AWS sees a new commit on either branch, it will rebuild the site.
The image below shows the _development_ branch rebuilding after the GitHub branch was updated by a Pull Request.

<img src="/static/img/readme_images/readme_aws_1.png" width="800"/>

This example took 2 minutes and 14 seconds to deploy.


<br/>

## Workflow for making updates:

### Workflow—Robot, Proton, and general pages:

<details>
  <summary>Click to expand for details on how to update pages and content</summary>

  1.  Clone or fork this repository,

          git clone https://github.com/clearpathrobotics/cpr-documentation.git

      The default branch is _development_, which reflects the current state of reviewed documentation.
      The _production_ branch is just a means to delay the website rebuild, till we have bundled a release.
  2.  Create a branch from _development_ with a name indicating the purpose, such as _feature_xxxxxx_.
  3.  Make changes to the relevant files.
  4.  Test using your local server, using the steps mentioned [Steps to run this on your computer locally](#steps-to-run-this-on-your-computer-locally)
  5.  When ready, enter `ctrl-c` in your terminal to stop the server. Then run `npm run build` to test that the site builds correctly.
  6.  Resolve any errors that the terminal reports, and rerun the command `npm run build`.
  7.  Finally, check that your updates adhere to our code formatting standard, by running the command `npm run format-check`.
      The terminal will either report:

      - _All matched files use Prettier code style!_
      - _Code style issues found in the above file(s). Forgot to run Prettier?_
        You can fix the errors by running Prettier on a single file, with `npx prettier --write <FILE PATH>`.
        For example, you can run the command `npx prettier --write README.md` to format this README.

        If you have added a new folder and need to format all files within it you can use the `*` wildcard, for example" `npx prettier --write folder/*`

        - Refer to the _package.json_ to understand what this script calls.
        - Refer to the _.prettierrc.json_ to understand the rules Prettier is using when checking files.
          > **NOTE**
          > 
          > We used to suggest the command `npm run format-write` to update all the files in this repository.
          > We don't suggest this command anymore, since it is then difficult for reviewers of Pull Requests to find the intended content changes.
          > If you continue to use this entire repository command, you may see files that claim to be updated in Source Control, but don't have any visible changes.
          > If so, you should run these commands in your terminal to prevent Git from noting these types of changes:
          > 
          > ```bash
          > git config --global core.filemode false
          > git config --global core.autocrlf false
          > ```

  8.  Run the spell checker to catch any spelling errors by running `npm run spellcheck`.
      If there are spelling errors, correct them in the source files. If you encounter a valid word that is flagged
      _(such as a technical term, brand name, or Canadian English spelling)_, add it to `.cspell/clearpath-dictionary.txt`.

  9.  When ready, publish your branch on GitHub, and submit a Pull Request to merge your changes into the _development_ branch.
      Pull Requests to the _production_ branch will not merged.
      Also note that this GitHub repository has branch protection rules, that prevent you from committing directly to _production_ and _development_.
      The Pull Request will automatically request reviews from people listed in the codeowners file, but you can also add more reviewers.
      PRs opened by organization members are automatically assigned to the author.
      PRs from external contributors are automatically assigned to the code owners.

      <img src="/static/img/readme_images/readme_github_1.png" width="467"/>

  10. The administrators of this documentation will review the website for any functional issues,
      and will periodically merge the latest commits in the _development_ branch into the _production_ branch.
</details>

### Workflow—OutdoorNav

<details>

<summary>Click to expand for details on how to update the OutdoorNav User Manual</summary>

<br>
The OutdoorNav User Manual is a "versioned" document, which means that a snapshot of the content is
made to align with a release. This allows users to access version-specific copies of the
documentation.

#### Development Phase

During the development phase, follow steps 1-10 of the workflow above. Note that the updates will not affect
the default view of the user manual, only the "next" version of the manual

#### Release Phase

When it is time to publish a numbered release of the user manual:

1.  Create a branch from _development_ with a name indicating the purpose, such as _release_xxxxxx_
2.  Run the versioning command, where _new_version_ is aligned with the corresponding software release:

        npm run docusaurus docs:version:outdoornav_user_manual <new_version>

3.  Update /static/versions.js to update the outdoornav version to match the GitHub tag.
4.  Build and test the changes (see steps 4-8 from the standard workflow above).
5.  When ready, publish your branch on GitHub, and submit a Pull Request to merge your changes into the _development_ branch.
    Be sure to include the updates to the following:
    - outdoornav_user_manual_versioned_docs/
    - outdoornav_user_manual_versioned_sidebars/
    - outdoornav_user_manual_versions.json

</details>

### Workflow—IndoorNav

<details>

<summary>Click to expand for details on how to update the IndoorNav User Manual</summary>

<br>
Follow the steps for the OutdoorNav User Manual workflow above, replacing
<b>outdoornav</b> with <b>indoornav</b>.

</details>

### Workflow—Software

<details>

<summary>Click to expand for details on how to update the Software User Manual</summary>

<br>
The Software sections of the website are a "versioned" document called <code>docs</code>, which means that a snapshot of the content is
made to align with each ROS version. This allows users to access version-specific copies of the
documentation.

#### Maintenance Phase (For Existing Version)

Follow steps 1-10 from [above](#workflow-for-making-updates). However, all changes will be made to the files within `docs_versioned_docs/` for the particular version that needs to be changed. E.g. any changes to the ROS 2 Humble documentation would be made to the files within `docs_versioned_docs/version-ros2humble/`.

#### Development Phase (For New Version)

Start by following step 1 & 2 [above](#workflow-for-making-updates).

Next, to start the development of a new version, the latest released version of the documentation must be copied over into the `docs/` folder.

For Example, for making a new release after humble, the contents of `docs_versioned_docs/version-ros2humble/` would be copied to `docs/`. This folder will then be built as the "next" version. Once enabled, this version will be available in the version drop down (just like how it is visible for OutdoorNav - http://docs.clearpathrobotics.com/docs_outdoornav_user_manual/next/index).

Enable the visibility of the "next" version by setting

```
includeCurrentVersion: true,
```

in `docusaurus.config.js` alongside `id: "docs",`. Ensure to reset this to false before releasing the changes.

Continue through to step 9 of the workflow above to complete the update. Once complete, continue to the release phase.
> **NOTE**
> 
> The documentation includes unversioned mdx components from `components/` and versioned components from `docs/components/`. If versioning needs to be added move the component into the versioned folder for each version and remap the imports (using relative links).

#### Release Phase (For New Version)

When it is time to publish a new version of the manual:

1.  After developing the changes, run the versioning command, where _new_version_ is aligned with the corresponding software release:

        npm run docusaurus docs:version:docs <new_version>

    where the `<new_version>` has no spaces or dashes (E.g. for ROS 2 Humble the version should be set as `ros2humble`)

2.  Update the `docusaurus.config.js` file, adding an entry within versions to map the version name to the display label.

```js
  versions: {
    ros2humble: {
      label: 'ROS 2 Humble',
    },
    ros1noetic: {
      label: 'ROS 1 Noetic',
    }
  },
```

3. Ensure that the "next" version is disabled in the following line in the config:

```
includeCurrentVersion: false,
```

4. Build and test the changes (see steps 4-8 from the standard workflow above).

5. Empty the docs folder leaving only the .keep file (such that the folder is still tracked by git).

6. When ready, publish your branch on GitHub, and submit a Pull Request to merge your changes into the _development_ branch.
   Be sure to include the updates to the following:
   - docs_versioned_docs/
   - docs_versioned_sidebars/
   - docs_versions.json

</details>


<br/>

## How should I write pages?

1.  Refer to [Markdown's guide](https://www.markdownguide.org/basic-syntax/) for syntax.
    Comments should be added using a `[//]: <>` start to a line.
    HTML commenting—`<!-- -->`—causes issues with the MDX extension in VS Code.
2.  Refer to [Docusaurus's guide](https://docusaurus.io/docs/next/markdown-features) for supported Markdown features.
3.  For advanced users, refer to [Markdown MDX](https://mdxjs.com/) for adding React Components to a Markdown file.
4.  For advanced users, you may create React pages using _.js_ or _.ts_ file types.
    > **NOTE**
    > 
    > All links and image import paths of versioned elements _(images, markdown files, components)_ 
    >   must be referred to using relative links including the file extension,
    >   `img/image-name.png`, or `../../robots/add-ons/pacs.mdx`.
    >  
    > All links and image imports paths of unversioned static elements may be referred to using absolute paths (`/static/img/image-name.png`).
    > 
    > Links to headings must not include an extra slash between the name of the page and the name of the heading.
    > Doing this can result in broken links.
    > For example: `../ros/#supported-platforms` is incorrect.
    > The correct syntax is `../ros#supported-platforms`.


<br/>

## How should I name files?

All files should use lowercase letters for their names and file extensions.
Our website's server is case sensitive, so it requires files case to match how it is called in your Markdown files.
Your Windows build commands may not catch these issues since Windows is not case sensitive.
Using lowercase letters minimizes the number of build issues.

- Good: `controller_1.png`
- Bad: `Controller_1.png`
- Bad: `controller_1.PNG`

Downloadable assets like PDFs should say _clearpath_robotics_ at the start of the name.
This helps Users know where they downloaded the file from later, as the asset is saved to their _Downloads_ folder.


<br/>

## Where should I place files?

1.  Markdown page

        /docs_proton
        /docs_robots
        /docs_versioned_docs
        /docs_indoornav_user_manual
        /docs_outdoornav_user_manual

2.  Markdown component, like a section to be reused in multiple pages _(unversioned)_

        /components

3.  Unversioned Images

        /static/img

4.  PDFs and similar customer facing files

        /static/assets

5.  Versioned Images

    In an `img/` folder next to the markdown files where it will be used.

6.  Files larger than 100 MB

    Files added to GitHub must be smaller than 100 MB—_(at time of writing in 2025-04)_.
    You will be able to commit a large file locally, but the push to GitHub will fail.
    We are storing large files in an Amazon S3 Bucket, rather than the cpr-documentation repository's `/static/assets` directory.
    Note that this means large files will need to be added by Clearpath Robotics staff, as we do not provide public access to this S3 Bucket.

    To add a file:

    - Sign into https://us-east-2.console.aws.amazon.com/s3/ .
    - Navigate to the S3 Bucket `cpr-documentation-large-files `.
    - Select the `Upload` button, and choose your local file.
    - After the file has been uploaded, click on the new object, and copy its `Object URL`.
      This is the public URL to access the file you uploaded.
      Note that this S3 Bucket is configured so all files' permissions are automatically set to public access.


<br/>

## Structure for pages

You can find templates in the directory _/static/reference_pages_


<br/>

## Equations

You can add equations using [KaTex syntax](https://katex.org/docs/supported.html).
The packages have are installed in the _package.json_ and imported into the project in _docusaurus.config.js_.
You simply need to add your equations to your Markdown file, keeping all the elements between opening an closing tags _$_.

$$
\omega=\cfrac{v_{r}-v_{l}}{W}
$$

You can test equation syntax using [this tool](https://katex.org/) from KaTex.


<br/>


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


<br/>

## SolidWorks image exports

> [!NOTE]
> This process was developed with SolidWorks 2020.

<details>
  <summary>Click to expand for the SolidWorks image export process</summary>

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

</details>


<br/>

## Mermaid Diagrams

Mermaid is a JavaScript based diagram generator that uses Markdown for descriptions and is available to docusaurus through a [plug-in](https://docusaurus.io/docs/next/markdown-features/diagrams).

To get started with Mermaid diagrams, use their [live tool](https://mermaid.live/edit).

> [!NOTE]
> Currently, we are on version 2.4.3 of the Mermaid plug-in.
> Therefore, not all of the templates in the live version are available.

Although Mermaid is more complicated to use than other tools, it is easy to version and outputs HTML objects; the resulting diagrams can include links and the text within it is searchable.
Additionally, HTML tags can be included within the diagrams for further customization.
Refer to the [Mermaid Documentation](https://mermaid.js.org/intro/getting-started.html) for more details on the diagram descriptions.

<details>
 <summary>Click to expand for <b>Mermaid themes</b></summary>
  In the [Docusaurus configuration file](./docusaurus.config.js), we have defined the site-wide themes for the Mermaid diagrams. Mermaid offers a choice of five different themes to choose from. There is a way to call the `mermaidAPI` to set a customized site-wide theme, however, this has not yet been implemented.

  See their [theming documentation](https://mermaid.js.org/config/theming.html) for more information.
</details>

<details>
 <summary>Click to expand for <b>creating a diagram</b></summary>
  In Docusaurus, we can use a [dyanmic Mermaid component](https://docusaurus.io/docs/next/markdown-features/diagrams#component) to define and load diagrams.

  First, we import the dynamic component.

  ```
  import Mermaid from '@theme/Mermaid';
  ```

  Then, we instantiate the component with the graph passed in as an argument.

  ```
  <Mermaid
    value={`
      graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    `}
  />
  ```

</details>

<details>
 <summary>Click to expand for <b>configuring a diagram</b></summary>
  Diagrams can be modified indepent from the site-wide theme and configuration using [directives](https://mermaid.js.org/config/directives.html). Essentially, these directives are used to pass in an initialization configuration to the local diagram that overrides the existing global configuration.

  For example, we can modify the way the arrow connecting two nodes is generated. Instead of the default, we can set the `curve` parameter to `step` to have the generated arrow move in steps rather than a smooth curve.

  ```
  <Mermaid
    value={`
      %%{ \
        init: { \
          'flowchart': { \
            'curve': 'step'
          } \
        } \
      }%%
      flowchart TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    `}
  />
  ```

  Notice that when defining a directive within the dynamic component, we must end every line with a backslash `\`. Make sure to not have any trailing commas, `,`, at the end of a list or dictionary.

  See the [flowchart configuration](https://mermaid.js.org/config/schema-docs/config-defs-flowchart-diagram-config.html) to see all the settings specific to flowcharts that can be modified with directives.

  You may notice that there is no way to set the font size through the diagram's configuration. Instead that must be done by modifying the theme variables.

  ```
  <Mermaid
    value={`
      %%{ \
        init: { \
          'themeVariables': { \
            'fontSize': '16px'
          } \
          'flowchart': { \
            'curve': 'step'
          } \
        } \
      }%%
      flowchart TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    `}
  />
  ```

  See the (Mermaid configuration)[https://mermaid.js.org/config/schema-docs/config.html] documentation page for an exhaustive list of parameters.

  Even though the font size has been modified, the rendered diagram's font may not appear to change size. Instead, the text size will remain a relatively similar size while the boxes and arrows appear smaller. Therefore, the sure-fire method to set a font size is to use HTML `<font size=10></font>` tags to wrap the text within a node.

  ```
  <Mermaid
    value={`
      %%{ \
        init: { \
          'themeVariables': { \
            'fontSize': '16px'
          } \
          'flowchart': { \
            'curve': 'step'
          } \
        } \
      }%%
      flowchart TD;
        A-->B(<font size=10>B Text<font>);
        A-->C;;
        B-->D;
        C-->D;
    `}
  />
  ```

</details>


<br/>

## Spelling Guide

> [!NOTE]
> Run the spell checker to catch any spelling errors by running `npm run spellcheck`.
> If there are spelling errors, correct them in the source files.
> If you encounter a valid word that is flagged 
>   _(such as a technical term, brand name, or Canadian English spelling)_,
>   add it to `.cspell/clearpath-dictionary.txt`.

Spelling on within this repository should align with the Government of Canada's [TERMIUM Plus®](https://www.btb.termiumplus.gc.ca/).
Industry terms should align with the related organization's preferred spelling.

<details>
  <summary>Click to expand spelling examples</summary>
  <table>
    <tr><th>Correct spelling</th><th>Mistake</th></tr>
    <tr><th>10</th><th>Ten</th></tr>
    <tr><th>2X</th><th>2x</th></tr>
    <tr><th>Aluminum</th><th>Aluminium</th></tr>
    <tr><th>Antennas</th><th>Antennae</th></tr>
    <tr><th>Antennas</th><th>Aerial</th></tr>
    <tr><th>AWS, or Amazon Web Services</th><th>Amazon AWS</th></tr>
    <tr><th>Colour</th><th>Color</th></tr>
    <tr><th>Computer</th><th>PC</th></tr>
    <tr><th>Enable Switch</th><th>Deadman Switch</th></tr>
    <tr><th>Emergency Stop</th><th>E-stop</th></tr>
    <tr><th>GitHub</th><th>Github</th></tr>
    <tr><th>Lidar</th><th>LiDAR</th></tr>
    <tr><th>Metre</th><th>Meter</th></tr>
    <tr><th>ROS 2</th><th>ROS2</th></tr>
    <tr><th>RViz</th><th>Rviz</th></tr>
    <tr><th>Gmapping</th><th>gmapping</th></tr>
    <tr><th>Tire</th><th>Tyre</th></tr>
    <tr><th>Wi-Fi</th><th>wifi</th></tr>
  </table>
</details>
