sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'bicycles/test/integration/FirstJourney',

    ],
    function(JourneyRunner, opaJourney, ) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('bicycles') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 

                }
            },
            opaJourney.run
        );
    }
);