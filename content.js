(function () {

    const causeDelay = (time) => {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        });
    };

    const clickConnectButtons = async () => {
        const allButtons = document.getElementsByTagName('button');
        for (let i = 0; i < allButtons.length; i++) {
            let potentialConnectButton = allButtons[i];

            const span = potentialConnectButton.getElementsByTagName("span")[0];
            if (span && span.innerText === "Connect") {
                potentialConnectButton.click();
                const allButtonsAgain = document.getElementsByTagName('button');
                await causeDelay(100);
                for (let j = 0; j < allButtonsAgain.length; j++) {
                    const potentialSendButton = allButtonsAgain[j];

                    const span = potentialSendButton.getElementsByTagName("span")[0];
                    if (span && span.innerText === "Send") {
                        potentialSendButton.click();
                        await causeDelay(5000);
                    }
                }
            }
        }
    };

    clickConnectButtons();

})();


