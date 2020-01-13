/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { RightPanel } from './right-panel';
import { MainPage } from '../main-page/main-page';
let rightPanel: RightPanel;
let mainPage: MainPage;

before(() => {
    const driver = browser;
    const url = '/';

    driver.url(url);
    rightPanel = new RightPanel(driver);
    mainPage = new MainPage(driver);
    // Make sure that the application shell is loaded
    mainPage.waitForStartup();
});

describe('theia right panel', () => {
    it("should show 'Outline'", () => {
        expect(rightPanel.doesTabExist('Outline')).to.be.true;
    });

    describe('outline tab', () => {
        it('should open/close the outline tab', () => {
            rightPanel.openCloseTab('Outline');
            expect(rightPanel.isOutlineViewVisible()).to.be.true;
            expect(rightPanel.isTabActive('Outline')).to.be.true;

            rightPanel.openCloseTab('Outline');
            expect(rightPanel.isOutlineViewVisible()).to.be.false;
            expect(rightPanel.isTabActive('Outline')).to.be.false;
        });
    });

});
