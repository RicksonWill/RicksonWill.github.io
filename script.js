
function createList(idList, channels) {
    const channelList = document.getElementById(idList);
    // channels = channels.slice(0, 8);

    channels.forEach(channel => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `
        <div class="channel" onclick="goToDetails('${channel.href}')">
            <div class="card-channel">
                <img src="img/${channel.logo}.png" alt="${channel.title}">
            </div>
            <div class="card-channel-name">${channel.title}</div>
        </div>
        `;
        channelList.appendChild(listItem);
    });
}
function goToDetails(channel) {
    window.location.href = `details.html?channel=${channel}`;
}



createList('sport', sportChannel);
createList('streaming', streamingChannel);
createList('channel', channel);


