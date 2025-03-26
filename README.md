# Akulaku Automation Test (Serenity/JS Cucumber Playwright)

[![LinkedIn Follow](https://img.shields.io/badge/Linkedin-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wahyuinc/)

### Installation

Once you have the code on your computer, use your computer terminal to run the following command in the directory where you've cloned the project:

```
npm ci
```

Running [`npm ci`](https://docs.npmjs.com/cli/v6/commands/npm-ci) downloads the [Node modules](https://docs.npmjs.com/about-packages-and-modules) this project depends on,
as well the [Serenity BDD CLI](https://github.com/serenity-bdd/serenity-cli) reporter jar.

### Corporate networks

If your network administrators require you to use proxy servers or an internal artifact registry (Artifactory, Nexus, etc.), your development environment might require some additional configuration.

The easiest way to do it is to create an [`.npmrc` file](https://docs.npmjs.com/cli/v6/configuring-npm/npmrc) in your home directory:

```
proxy=http://user:password@host.mycompany.com:8080/
https-proxy=http://user:password@host.mycompany.com:8080/
strict-ssl=false
registry=https://artifactory.mycompany.com/artifactory/
```

If you encounter issues downloading the Serenity BDD CLI jar, please follow the [detailed instructions in the Serenity/JS Handbook](https://serenity-js.org/api/serenity-bdd/#downloading-the-serenity-bdd-reporting-cli).

Similar instructions are available for the [`chromedriver` module](https://www.npmjs.com/package/chromedriver).

### Execution

The project provides several [NPM scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) defined in [`package.json`](package.json):

```
npm run lint            # runs code linter
npm run lint:fix        # attempts to automatically fix linting issues
npm run clean           # removes reports from any previous test run
npm test                # executes the example test suite
                        # and generates the report under ./target/site/serenity
npm start               # starts a mini HTTP server and serves the test reports
                        # at http://localhost:8080
```

## Support Serenity/JS

Serenity/JS is a free open-source framework, so we rely on our [wonderful GitHub sponsors](https://github.com/sponsors/serenity-js) to keep the lights on.

If you appreciate all the effort that goes into making sophisticated tools easy to work with, please support our work and [become a Serenity/JS GitHub Sponsor](https://github.com/sponsors/serenity-js) today!

[![LinkedIn Follow](https://img.shields.io/badge/Follow%20Serenity%2FJS-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/serenity-js)
[![YouTube Follow](https://img.shields.io/badge/Watch%20@serenity—JS-FA120F?style=for-the-badge—=youtube—=white)](https://www.youtube.com/@serenity-js)
[![GitHub Sponsors](https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/serenity-js)
