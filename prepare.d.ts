export function prepare({
  remote,
  author,
  repository,
  remoteToken = process.env.REMOTE_TOKEN,
  binary,
  usePackageJson,
  orders,
  stableOnly,
  tagPrefix
}:
  | {
      remote: 'github';
      author: string;
      repository: string;
      remoteToken: string;
      binary: string;
      usePackageJson?: boolean;
      orders?: Array<'binary' | 'version' | 'vendor' | 'os' | 'arch'>;
      tagPrefix?: string;
    }
  | {
      remote: 'github';
      author: string;
      repository: string;
      remoteToken: string;
      binary: string;
      orders?: Array<'binary' | 'version' | 'vendor' | 'os' | 'arch'>;
      stableOnly?: boolean;
      tagPrefix?: string;
    }): Promise<boolean>;

export const maps = {
  // Mapping constants
  arch: {
    arm64: 'aarch64',
    x86: 'x86_64',
    x64: 'x86_64'
  },
  vendor: {
    darwin: 'apple',
    win32: 'pc',
    linux: 'unknown'
  },
  os: {
    darwin: 'darwin',
    win32: 'windows-msvc',
    linux: 'linux'
  }
} as const;
