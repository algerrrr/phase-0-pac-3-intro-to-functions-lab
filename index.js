function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
    return
}

function logWhisper(string) {
    console.log(whisper(string));
    return
}

function sayHiToHeadphonedRoommate(string) {
    if (string == string.toLowerCase()) {
     return "I can't hear you!"
    }
    else if (string == shout(string)) {
     return "YES INDEED!"
    }
    else if (string == "Let's have dinner together!") {
     return "I would love to!"
    }
}

sayHiToHeadphonedRoommate("Let's have dinner together!")