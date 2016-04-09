// Copyright (C) 2016 Philipp Henkel
// Licensed under the MIT License (MIT). See LICENSE file for more details.

exports.isTorrentAllowed = function (infoHash, whitelist) {
    if (!whitelist || whitelist.length == 0) {
      return true;
    }
    else if (~whitelist.indexOf(infoHash)) {
      return true;
    } 
    else {
      return false;
    }
}
