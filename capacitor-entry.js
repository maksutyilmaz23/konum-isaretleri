import { Capacitor, registerPlugin } from '@capacitor/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { unzipSync, strFromU8 } from 'fflate';

const BackgroundGeolocation = registerPlugin('BackgroundGeolocation');

window.AppCap = { Capacitor, Filesystem, Directory, Encoding, Share, BackgroundGeolocation, unzipSync, strFromU8 };
