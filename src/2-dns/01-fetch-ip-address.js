async function fetchIPAddress(domain) {
    const resp = await fetch(
        `https://cloudflare-dns.com/dns-query?name=${domain}&type=A`,
        {
            headers: {
                accept: 'application/dns-json',
            },
        }
    )
    const respObject = await resp.json()
    // console.log(respObject)

    return respObject['Answer'][0]['data']
}

async function main() {
    const domain = 'www.google.com'
    const ipAddress = await fetchIPAddress(domain)
    if (!ipAddress) {
        console.log('something went wrong in fetchIPAddress')
    } else {
        console.log(`found IP address for domain ${domain}: ${ipAddress}`)
    }
}

main().catch((err) => console.error(err))
