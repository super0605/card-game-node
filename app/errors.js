const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

exports.SCHEMA_ERROR = 'schema_error';
exports.schemaError = message => internalError(message, exports.SCHEMA_ERROR);

exports.CARD_PLAYED_IS_NOT_IN_HAND_ERROR = 'card_played_is_not_in_hand_error';
exports.cardPlayedIsNotInHandError = () =>
  internalError('Card played is not in hand', exports.CARD_PLAYED_IS_NOT_IN_HAND_ERROR);

exports.CARD_WAS_NOT_PLAYED_ERROR = 'card_was_not_played_error';
exports.cardWasNotPlayedError = () =>
  internalError('Card was not played in a turn that a card can be played', exports.CARD_WAS_NOT_PLAYED_ERROR);

exports.DATABASE_ERROR = 'database_error';
exports.databaseError = message => internalError(message, exports.DATABASE_ERROR);

exports.GAME_WAS_NOT_FOUND_ERROR = 'game_was_not_found_error';
exports.gameWasNotFoundError = () => internalError('Game was not found', exports.GAME_WAS_NOT_FOUND_ERROR);

exports.GAME_IS_ALREADY_FINISHED_ERROR = 'game_is_already_finished_error';
exports.gameIsAlreadyFinishedError = () =>
  internalError('Game is already finished', exports.GAME_IS_ALREADY_FINISHED_ERROR);
