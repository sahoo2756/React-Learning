function formatNumberAbbreviation(number) {
    number = parseInt(number);
    if (number < 0) {
        // step 1 : for -ve number
        return 0
    }
    else if (number < 1000) {
        // step 2 : For 3-digit numbers
        return `${number}`
    }
    else if (number < 1_000_000) {
        // step 3 : For numbers less than 1000K [1000k = 10 lakh] (1 million) 
        // return `${(number / 1000).toFixed((number % 1000 === 0) ? 0 : 1)}K`;
        return `${Math.round((number / 1000) * 10) / 10}K`
    }
    else if (number < 1_000_000_000) {
        // step 4 : For numbers less than 1000M (1 billion)
        // return `${(number / 1_000_000).toFixed((number % 1_000_000) === 0 ? 0 : 1)}M`;
        return `${Math.round((number / 1_000_000) * 10) / 10}M`
    } else {
        // step 5 : For numbers less than 10B (10 billion)
        // return `${(number / 1_000_000_000).toFixed((number % 1_000_000_000) === 0 ? 0 : 1)}B`;
        return `${Math.round((number / 1_000_000_000) * 10) / 10}B`
    }
}


function format_iso_duration_to_HMS(durationString = "PT0H0M0S") {
    const duration = { hours: 0, minutes: 0, seconds: 0 };

    // Remove 'PT' prefix and replace 'H', 'M', 'S' with colons
    const parts = durationString
        .replace("PT", "")
        .replace("H", ":")
        .replace("M", ":")
        .replace("S", "")
        .split(":");

    let finalVideoDuration = "0:0:0", hours = '', miniutes = '', seconds = ''
    // Parse the parts into hours, minutes, and seconds
    if (parts.length === 3) {
        hours = parts[0]
        miniutes = parts[1]
        seconds = parts[2]
        finalVideoDuration = `${hours}:${miniutes}:${seconds}`
    } else if (parts.length === 2) {
        miniutes = parts[0]
        seconds = parts[1];
        finalVideoDuration = `${miniutes}:${seconds}`
    } else if (parts.length === 1) {
        seconds = parts[0]
        finalVideoDuration = seconds
    }

    return finalVideoDuration;
}

function getRelativeTimeDifference(isoDate) {
    // Convert ISO date to Date object if it's not already
    const publishDate = new Date(isoDate);
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const diffInMs = Math.abs(currentDate - publishDate);


    // Convert the difference into different time units
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30.44); // Approximation of average month length
    const diffInYears = Math.floor(diffInMonths / 12);

    // Check each condition from years down to seconds
    if (diffInYears > 0) {
        return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
    } else if (diffInMonths > 0) {
        return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    } else if (diffInDays > 0) {
        return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else if (diffInHours > 0) {
        return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else if (diffInMinutes > 0) {
        return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    } else {
        return `${diffInSeconds} second${diffInSeconds > 1 ? 's' : ''} ago`;
    }
}


export {formatNumberAbbreviation , format_iso_duration_to_HMS , getRelativeTimeDifference}