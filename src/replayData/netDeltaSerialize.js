const NetDeltaSerializeHeader = require("./netDeltaSerializeHeader");
const receiveProperties = require("./receiveProperties");
const pathhhh = require('path');

const NetDeltaSerialize = (reader, group, bunch, enablePropertyChecksum, globalData, mapObjectName) => {
  const header = NetDeltaSerializeHeader(reader);

  if (reader.isError) {
    return false;
  }

  for (let i = 0; i < header.numDeletes; i++) {
    const elementIndex = reader.readInt32();

    globalData.netDeltaEmitter.emit(exportGroup.type, bunch.chIndex, {
      deleted: true,
      elementIndex,
      path: group.pathName,
      export: {
        type: pathhhh.basename(group.pathName),
      },
    }, bunch.timeSeconds, mapObjectName, globalData);
  }

  for (let i = 0; i < header.numChanged; i++) {
    const elementIndex = reader.readInt32();

    const exportGroup = receiveProperties(reader, group, bunch, !enablePropertyChecksum, true, globalData, mapObjectName);

    if (!exportGroup) {
      continue;
    }

    globalData.netDeltaEmitter.emit(exportGroup.type, bunch.chIndex, {
      elementIndex,
      export: exportGroup,
    }, bunch.timeSeconds, mapObjectName, globalData)
  }
};

module.exports = NetDeltaSerialize;
