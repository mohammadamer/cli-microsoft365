import { JsonFile } from '.';
import { Hash } from '../../../../../utils/types';

export interface VsCodeLaunchJson extends JsonFile {
  version: string;
  configurations?: VsCodeLaunchJsonConfiguration[];
}

interface VsCodeLaunchJsonConfiguration {
  name?: string;
  sourceMapPathOverrides?: Hash;
  type?: string;
  url?: string;
}