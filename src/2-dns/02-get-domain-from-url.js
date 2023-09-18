function getDomainNameFromURL(url) {
    return new URL(url).hostname
}

const bootdevURL = 'https://boot.dev/learn/learn-python'
const domainName = getDomainNameFromURL(bootdevURL)
console.log(`The domain name for ${bootdevURL} is ${domainName}`)
