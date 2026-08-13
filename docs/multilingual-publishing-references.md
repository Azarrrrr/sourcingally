# Multilingual Publishing Workflow: Official References

GitHub’s REST repository-contents endpoint supports creating a new file or replacing an existing file in a repository through `PUT /repos/{owner}/{repo}/contents/{path}`. This is suitable for a future authenticated editorial dashboard, but it requires a credential with permission to write to the repository.

Cloudflare Pages supports Git integration: when a Pages project is connected to a GitHub or GitLab repository, it can automatically build and deploy the project after a push. As an alternative, Cloudflare documents direct-upload deployments from continuous-integration systems using Wrangler.

## Sources

1. [GitHub REST API — Repository contents](https://docs.github.com/rest/repos/contents)
2. [Cloudflare Pages — Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/)
3. [Cloudflare Pages — Direct Upload with continuous integration](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/)
