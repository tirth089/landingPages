import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './tabsBarComp.scss';
import MiddleSimpleComp from '../middleSimpleComp/middleSimpleComp';
import ButtonComp from '../buttonComp/buttonComp';
import illustrationlogo1 from '../../../assets/illustration-features-tab-1.svg';
import illustrationlogo2 from '../../../assets/illustration-features-tab-2.svg';
import illustrationlogo3 from '../../../assets/illustration-features-tab-3.svg';

const TabsBarComp = () => {

    const TabPanel = (props: any) => {
        const { children, value, index, ...other } = props;
        return (
            <div
                hidden={value !== index}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    const [value, setValue] = useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    const moreInfo = () => { }
    const TabPanelSection = ({ logo, sectionTitle, sectionId }: any) => {
        return (
            <div className="testi-content grid-2">
                <div className="column-1 image">
                    <img src={logo} alt="" className="img-element" />
                    <div className="rect"></div>
                </div>
                <div className="column-2 bookmarkText">
                    <MiddleSimpleComp
                        sectionTitle={sectionTitle}
                        sectionId={sectionId}
                        isContainerCentered={false}>
                    </MiddleSimpleComp>
                    <ButtonComp
                        classes="primaryBtn hide-375"
                        buttonString='More Info'
                        buttonClickedFunc={moreInfo}>
                    </ButtonComp>
                </div>
            </div>
        )
    }
    return (
        <div className="tabsSection">
            <Paper>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Simple Bookmarking" />
                    <Tab label="Speedy Searching" />
                    <Tab label="Easy Sharing" />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0}>
                <TabPanelSection
                    logo={illustrationlogo1}
                    sectionTitle='Bookmark in one click'
                    sectionId='bookmark'></TabPanelSection>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TabPanelSection
                    logo={illustrationlogo2}
                    sectionTitle='Intelligent Search'
                    sectionId='search'></TabPanelSection>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TabPanelSection
                    logo={illustrationlogo3}
                    sectionTitle='Share Your Bookmark'
                    sectionId='share'></TabPanelSection>
            </TabPanel>
        </div>
    );
}
export default TabsBarComp