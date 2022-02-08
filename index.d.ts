declare namespace gitUserInfo {
  interface Options {
    readonly cwd?: string
    readonly path?: string
  }
}

export function getGitUserInfo(
  options?: gitUserInfo.Options
): Promise<Record<string, any>>
