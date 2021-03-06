import {
  getIconForFile,
  getIconForFolder,
  getIconForOpenFolder,
} from 'vscode-icons-js'

function importAll (r) {
  r.keys().forEach(r);
}
importAll(require.context('./icons/', true, /\.svg$/));

const iconPath = './icons/'

const FileIcon = function (name) {
  return iconPath + getIconForFile(name)
}

const DirectoryIcon = function (name, isOpened = false) {
  name = name.substring(0, name.lastIndexOf('/'))
  if (isOpened) {
    return iconPath + getIconForOpenFolder(name)
  } else {
    return iconPath + getIconForFolder(name)
  }
}

export default {
  FileIcon,
  DirectoryIcon
}

export {
  FileIcon,
  DirectoryIcon
}
