const { browser, driver, $, $$, expect} = require('@wdio/globals');

 describe('My First demo appp testing', () => {
    it('should open home page', async () => {
     const homeScreen = await $(`~Home-screen`)
     await expect(homeScreen).toBeDisplayed()
    })

    it('should tap on "Swipe" menu', async () => {
        const swipeBtn = await $(`//android.widget.Button[@content-desc="Swipe"]/android.widget.TextView[1]`)
        const swipePageTitle = await $('//android.widget.ScrollView[@content-desc="Swipe-screen"]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView')
        swipeBtn.touchAction('tap')
        await expect(swipePageTitle).toHaveText('Swipe horizontal')
    })

    it('should find secret on "Swipe" page', async () => {
        const screen = await $('//android.widget.ScrollView[@content-desc="Swipe-screen"]/android.view.ViewGroup')
        const swipeBtn = await $(`//android.widget.Button[@content-desc="Swipe"]/android.widget.TextView[1]`)
        const swipePageTitle = await $('//android.widget.ScrollView[@content-desc="Swipe-screen"]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView')
        const secret = await $(`~WebdriverIO logo`)
        await swipeBtn.touchAction('tap')
        browser.touchAction([
           { action: 'press', x: 60, y: 1766 },
           { action: "wait",  ms: 1000 },
           { action: 'moveTo', x: 71, y: 244 },
           { action: 'release'} 
            ]); 
        await browser.pause(2000)
        browser.touchAction([
            { action: 'press',  x: 506, y: 1133  },
            { action: "wait",  ms: 1000 },
            { action: 'moveTo', x: 536, y: 158 },
            { action: 'release'}
            ]);  
        await expect(await secret).toBeDisplayed()
    })

    it('should build robot on "Drag" page', async () => {
        const dragBtn = await $(`//android.widget.Button[@content-desc="Drag"]/android.widget.TextView[1]`)
        const successText = await $(`//android.view.ViewGroup[@content-desc="Drag-drop-screen"]/android.view.ViewGroup[1]/android.widget.TextView`)
        await dragBtn.touchAction('tap')
        driver.touchAction([
            { action: 'press', x: 720, y: 1560},
            { action: "wait",  ms: 1000 },
            { action: 'moveTo', x:525 , y: 593},
            { action: 'release'}
          ]);
        driver.touchAction([
            {action: 'press', x: 551 , y:1560},
            { action: "wait",  ms: 1000 },
            {action: 'moveTo', x: 750, y: 600},
            {action: 'release'}
          ]);
        driver.touchAction([
            {action: 'press', x: 615, y: 1733},
            { action: "wait",  ms: 1000 },
            {action: 'moveTo', x: 304, y: 600},
            {action: 'release'}
          ]);
        driver.touchAction([
            {action: 'press', x: 439, y: 1733},
            { action: "wait",  ms: 1000 },
            {action: 'moveTo', x: 536, y: 821},
            {action: 'release'}
          ]);
        driver.touchAction([
            {action: 'press', x: 184, y: 1571},
            { action: "wait",  ms: 1000 },
            {action: 'moveTo', x: 300, y: 814},
            {action: 'release'}
          ]);
        driver.touchAction([
            {action: 'press', x: 274, y: 1740},
            { action: "wait",  ms: 1000 },
            {action: 'moveTo', x: 750, y: 840},
            {action: 'release'}
          ]);
        driver.touchAction([
            {action: 'press', x: 893, y: 1553},
            { action: "wait",  ms: 1000 },
            {action: 'moveTo', x: 540, y: 1020},
            {action: 'release'}
          ]);
        driver.touchAction([
            {action: 'press', x: 810, y: 1721},
            { action: "wait",  ms: 1000 },
            {action: 'moveTo', x: 330,y: 1030},
            {action: 'release'}
          ]);
        driver.touchAction([
            {action: 'press', x: 353, y:1568},
            { action: "wait",  ms: 1000 },
            {action: 'moveTo', x: 746, y: 1043},
            {action: 'release'}
          ]);
        await driver.pause(2000) 
        await expect(successText).toBeDisplayed()
        await expect(successText).toHaveTextContaining('You made it, click retry if you want to try it again.')
    })

    it('should Fill form', async () => {
        const formsBtn = await $(`~Forms`)
        const inputField = await $('~text-input')
        const inputResult = await $('~input-text-result')
        await formsBtn.touchAction('tap')
        await inputField.touchAction('tap')
        await inputField.setValue('Yuuppii')
        await expect(inputResult).toHaveText('Yuuppii')
    })
})


