const handleSafezone = (chIndex, info, timeseconds, mapObjectName, globalData) => {
  if (info.SafeZoneStartShrinkTime && info.SafeZoneFinishShrinkTime) {
    globalData.result.gameData.safeZones.push(info);
  }
};

module.exports = handleSafezone;
