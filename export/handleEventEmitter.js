const handleChest = require('./actorDespawn/handleChest');
const handleActiveGameplayModifiers = require('./netDeltaExport/handleActiveGameplayModifiers');
const handleChests = require('./propertyExport/handleChests');
const handleFortBroadcastRemoteClientInfoMapMarker = require('./propertyExport/handleFortBroadCastRemoteClientInfoMapMarker');
const handleFortPickup = require('./propertyExport/handleFortPickup');
const handlePlayerState = require('./propertyExport/handleFortPlayerState');
const handleGameplayCues = require('./propertyExport/handleGameplayCues');
const handleGameState = require('./propertyExport/handleGameState');
const handleHealthSet = require('./propertyExport/handleHealthSet');
const handleLabradorLlama = require('./propertyExport/handleLabradorLlama');
const handleLootLlama = require('./propertyExport/handleLootLlama');
const handlePlayerBuilds = require('./propertyExport/handlePlayerBuilds');
const handlePlayerPawn = require('./propertyExport/handlePlayerPawn');
const handlePlaylistInfo = require('./propertyExport/handlePlaylistInfo');
const handleSafezone = require('./propertyExport/handleSafezoneIndicator');
const handleSoccerGame = require('./propertyExport/handleSoccerGame');
const handleSpeedSign = require('./propertyExport/handleSpeedSign');
const handleSupplyDrop = require('./propertyExport/handleSupplyDrop');
const handleValets = require('./propertyExport/handleValets');

const handleEventEmitter = ({ actorDespawnEmitter, propertyExportEmitter, netDeltaReadEmitter }) => {
  actorDespawnEmitter.on('Tiered_Chest_Athena.Tiered_Chest_Athena_C', handleChest);

  propertyExportEmitter.on('SafeZoneIndicator.SafeZoneIndicator_C', handleSafezone);
  propertyExportEmitter.on('PlayerPawn_Athena.PlayerPawn_Athena_C', handlePlayerPawn);
  propertyExportEmitter.on('FortniteGame.FortPlayerStateAthena', handlePlayerState);
  propertyExportEmitter.on('Athena_GameState.Athena_GameState_C', handleGameState);
  propertyExportEmitter.on('FortniteGame.FortPickupAthena', handleFortPickup);
  propertyExportEmitter.on('Athena_GameState_C_ClassNetCache', handlePlaylistInfo);
  propertyExportEmitter.on('PlayerBuilds', handlePlayerBuilds);
  propertyExportEmitter.on('Valet', handleValets);
  propertyExportEmitter.on('BP_Athena_SpeedSign.BP_Athena_SpeedSign_C', handleSpeedSign);
  propertyExportEmitter.on('Chests', handleChests);
  propertyExportEmitter.on('FortniteGame.FortBroadcastRemoteClientInfo:ClientRemotePlayerAddMapMarker', handleFortBroadcastRemoteClientInfoMapMarker);
  propertyExportEmitter.on('FortniteGame.FortBroadcastRemoteClientInfo:ClientRemotePlayerRemoveMapMarker', handleFortBroadcastRemoteClientInfoMapMarker);
  propertyExportEmitter.on('FortniteGame.FortRegenHealthSet', handleHealthSet);
  propertyExportEmitter.on('gameplayCue', handleGameplayCues);
  propertyExportEmitter.on('BP_AIPawn_Labrador.BP_AIPawn_Labrador_C', handleLabradorLlama);
  propertyExportEmitter.on('AthenaSupplyDrop_Llama.AthenaSupplyDrop_Llama_C', handleLootLlama);
  propertyExportEmitter.on('AthenaSupplyDrop.AthenaSupplyDrop_C', handleSupplyDrop);
  propertyExportEmitter.on('Athena_SoccerGame.Athena_SoccerGame_C', handleSoccerGame);

  netDeltaReadEmitter.on('FortniteGame.ActiveGameplayModifier', handleActiveGameplayModifiers)
};

module.exports = handleEventEmitter;
