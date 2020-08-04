const stations = [
    {
        "device_id": "11",
        "device_Name": "iTravel-1-Lagada",
        "lat": "40.6474504131169920",
        "lon": "22.9352212691169370"
    },
    {
        "device_id": "12",
        "device_Name": "iTravel-1-V. Olgas",
        "lat": "40.6150064974067820",
        "lon": "22.9541949287744270"
    },
    {
        "device_id": "13",
        "device_Name": "iTravel-1-LefkosPyrgos",
        "lat": "40.6262911753818730",
        "lon": "22.9489932096469150"
    },
    {
        "device_id": "14",
        "device_Name": "iTravel-1-YMCA",
        "lat": "40.6262145694257060",
        "lon": "22.9532791176056890"
    },
    {
        "device_id": "15",
        "device_Name": "iTravel-1-K. Karamanli",
        "lat": "40.6113924511909450",
        "lon": "22.9634620090564570"
    },
    {
        "device_id": "17",
        "device_Name": "iTravel-1-Dimokratias Sq.",
        "lat": "40.6400262325646930",
        "lon": "22.9361225991203810"
    },
    {
        "device_id": "18",
        "device_Name": "iTravel-1-Evagelistria",
        "lat": "40.6343644525075620",
        "lon": "22.9565020750901570"
    },
    {
        "device_id": "19",
        "device_Name": "iTravel-1-D. Isodos",
        "lat": "40.6459148318784220",
        "lon": "22.9176903447571480"
    },
    {
        "device_id": "20",
        "device_Name": "iTravel-1-Monastiriou",
        "lat": "40.6558260774822530",
        "lon": "22.9041176950632920"
    },
    {
        "device_id": "21",
        "device_Name": "iTravel-21-St. Kazantzidi",
        "lat": "40.5737487731048890",
        "lon": "22.9906071424238690"
    },
    {
        "device_id": "22",
        "device_Name": "iTravel-22-Moudanion Highway",
        "lat": "40.5693434245466160",
        "lon": "22.9862803705026410"
    },
    {
        "device_id": "23",
        "device_Name": "iTravel-23-G. Sxolis Ave.",
        "lat": "40.5677460384070440",
        "lon": "22.9746844097849130"
    },
    {
        "device_id": "24",
        "device_Name": "iTravel-24-Thermi",
        "lat": "40.5529149127653170",
        "lon": "23.0172994472127360"
    },
    {
        "device_id": "25",
        "device_Name": "iTravel-1-MarinaParking",
        "lat": "35.1875934406409100",
        "lon": "25.7163805686998330"
    },
    {
        "device_id": "26",
        "device_Name": "iTravel-1-Port",
        "lat": "35.1911059999999980",
        "lon": "25.7216510000000010"
    },
    {
        "device_id": "27",
        "device_Name": "iTravel-1-Police",
        "lat": "35.1855927576740020",
        "lon": "25.7067728251486190"
    },
    {
        "device_id": "28",
        "device_Name": "iTravel-1-MarinopoulosIntersection",
        "lat": "35.1982292151556140",
        "lon": "25.7088567277315860"
    },
    {
        "device_id": "29",
        "device_Name": "iTravel-1-AmmoudiBeach",
        "lat": "35.1985354999999980",
        "lon": "25.7121250000000000"
    },
    {
        "device_id": "30",
        "device_Name": "iTravel-1-Latous",
        "lat": "35.1869226000000030",
        "lon": "25.7125191999999990"
    },
    {
        "device_id": "31",
        "device_Name": "iTravel-31-Ag. Pavlos hospital",
        "lat": "40.5763137554355710",
        "lon": "22.9699537642341060"
    },
    {
        "device_id": "32",
        "device_Name": "iTravel-32-Panorama Interchange",
        "lat": "40.5989177611491100",
        "lon": "22.9970729090314310"
    },
    {
        "device_id": "33",
        "device_Name": "iTravel-33-Gr. Labraki",
        "lat": "40.6114027686660390",
        "lon": "22.9860750809189080"
    },
    {
        "device_id": "34",
        "device_Name": "iTravel-34-Lampraki&Kleanthous",
        "lat": "40.6161870634187350",
        "lon": "22.9732180126013640"
    },
    {
        "device_id": "35",
        "device_Name": "iTravel-35-City Center Interchange",
        "lat": "40.6281548002886690",
        "lon": "22.9771977402310770"
    },
    {
        "device_id": "36",
        "device_Name": "iTravel-36-Diavata",
        "lat": "40.6953254527893120",
        "lon": "22.8454167880158820"
    },
    {
        "device_id": "37",
        "device_Name": "iTravel-37-Kaftatzoglio",
        "lat": "40.6220688984109230",
        "lon": "22.9673265405040180"
    },
    {
        "device_id": "38",
        "device_Name": "iTravel-38-Eptapirgio Interchange",
        "lat": "40.6441186230452090",
        "lon": "22.9691832996945780"
    },
    {
        "device_id": "39",
        "device_Name": "iTravel-39-Neapoli Interchange",
        "lat": "40.6596706712798120",
        "lon": "22.9681942351152200"
    },
    {
        "device_id": "40",
        "device_Name": "iTravel-40-Papageorgiou Interchange",
        "lat": "40.6791562325441020",
        "lon": "22.9583545513696660"
    },
    {
        "device_id": "41",
        "device_Name": "iTravel-41-Stauroupoli Interchange",
        "lat": "40.6774226390008590",
        "lon": "22.9389474280219470"
    },
    {
        "device_id": "42",
        "device_Name": "iTravel-42-Neapoli",
        "lat": "40.6574512794702090",
        "lon": "22.9649789370637340"
    },
    {
        "device_id": "43",
        "device_Name": "iTravel-43-Ag. Therapondas",
        "lat": "40.6095290320497500",
        "lon": "22.9714112430974640"
    },
    {
        "device_id": "44",
        "device_Name": "iTravel-44-Stauroupoli City Hall",
        "lat": "40.6624683325288740",
        "lon": "22.9360030330758490"
    },
    {
        "device_id": "45",
        "device_Name": "iTravel-45-Ifestionos",
        "lat": "40.6426813026083100",
        "lon": "22.9391082599840960"
    },
    {
        "device_id": "46",
        "device_Name": "iTravel-46-Eleftherias Sq.",
        "lat": "40.6340712024461300",
        "lon": "22.9389004893641870"
    },
    {
        "device_id": "47",
        "device_Name": "iTravel-47-Bank of Greece",
        "lat": "40.6351367708993790",
        "lon": "22.9386463500600260"
    },
    {
        "device_id": "48",
        "device_Name": "iTravel-48-Dikastiria Intersection",
        "lat": "40.6395031847470070",
        "lon": "22.9308712966781060"
    },
    {
        "device_id": "49",
        "device_Name": "iTravel-49-Airport Intersection",
        "lat": "40.5328818865633240",
        "lon": "22.9939870275597970"
    },
    {
        "device_id": "50",
        "device_Name": "iTravel-50-Theagenio hospital",
        "lat": "40.6183386046738590",
        "lon": "22.9584866501431860"
    },
    {
        "device_id": "51",
        "device_Name": "iTravel-51-M. Botsari",
        "lat": "40.6070110590993920",
        "lon": "22.9511441029649180"
    },
    {
        "device_id": "52",
        "device_Name": "iTravel-52-Adrianoupoleos",
        "lat": "40.5897521565682030",
        "lon": "22.9545014575154480"
    },
    {
        "device_id": "53",
        "device_Name": "iTravel-53-V. Olgas",
        "lat": "40.5945559242194350",
        "lon": "22.9561717361048070"
    },
    {
        "device_id": "54",
        "device_Name": "iTravel-54-Martiou",
        "lat": "40.6008483896048350",
        "lon": "22.9593650735955630"
    },
    {
        "device_id": "55",
        "device_Name": "iTravel-55-K. Karamanli",
        "lat": "40.5972930778242540",
        "lon": "22.9646899290423790"
    },
    {
        "device_id": "56",
        "device_Name": "iTravel-56-EthnikoStadioSerron",
        "lat": "41.0872092965976070",
        "lon": "23.5270014662704630"
    },
    {
        "device_id": "57",
        "device_Name": "iTravel-57-LeofMerarchiasKilkis",
        "lat": "41.0823389673631850",
        "lon": "23.5426313405275780"
    },
    {
        "device_id": "58",
        "device_Name": "iTravel-58-PlatiaEmporiou",
        "lat": "41.0900450761200490",
        "lon": "23.5526652889375330"
    },
    {
        "device_id": "59",
        "device_Name": "iTravel-59-MegalouAlexandrouAgiasSofias",
        "lat": "41.0922769824143900",
        "lon": "23.5584866852674390"
    },
    {
        "device_id": "60",
        "device_Name": "iTravel-60-EOKavalasXanthisThsaou",
        "lat": "40.9442489999999990",
        "lon": "24.4271239999999990"
    },
    {
        "device_id": "61",
        "device_Name": "iTravel-61-PlatiaNikotsara",
        "lat": "40.9371569999999990",
        "lon": "24.4130840000000010"
    },
    {
        "device_id": "62",
        "device_Name": "iTravel-62-OmoniasGallikisDimokratias",
        "lat": "40.9370400000000030",
        "lon": "24.4158700000000020"
    },
    {
        "device_id": "63",
        "device_Name": "iTravel-63-KavalaPort",
        "lat": "40.9345417447539430",
        "lon": "24.4124746294651230"
    },
    {
        "device_id": "64",
        "device_Name": "ITravel-64-PanagiotiKanelopoulou",
        "lat": "38.2726270000000000",
        "lon": "21.7582939999999990"
    },
    {
        "device_id": "65",
        "device_Name": "ITravel-65-KalavritianouOlokaytomatos",
        "lat": "38.2345589999999970",
        "lon": "21.7464640000000000"
    },
    {
        "device_id": "66",
        "device_Name": "ITravel-66-NeoLimani",
        "lat": "38.2319730378439500",
        "lon": "21.7246659447746420"
    },
    {
        "device_id": "67",
        "device_Name": "ITravel-67-Papaflessa",
        "lat": "38.2491701064082650",
        "lon": "21.7349467668648230"
    },
    {
        "device_id": "68",
        "device_Name": "ITravel-68-PlateiaNikis",
        "lat": "38.2567120000000000",
        "lon": "21.7433260000000000"
    },
    {
        "device_id": "69",
        "device_Name": "ITravel-69-MarinaPatras",
        "lat": "38.2411379999999990",
        "lon": "21.7265680000000000"
    },
    {
        "device_id": "70",
        "device_Name": "ITravel-70-TrionSummaxon",
        "lat": "38.2601769999999990",
        "lon": "21.7386240000000020"
    },
    {
        "device_id": "71",
        "device_Name": "ITravel-71-PlateiaBasileosGeorgiou",
        "lat": "38.2462437489333450",
        "lon": "21.7350756491432550"
    },
    {
        "device_id": "72",
        "device_Name": "Thess1",
        "lat": "40.6015794478607500",
        "lon": "22.9697104543447490"
    },
    {
        "device_id": "73",
        "device_Name": "Thess2",
        "lat": "40.5984121431745280",
        "lon": "22.9505199193954470"
    },
    {
        "device_id": "74",
        "device_Name": "Thess3",
        "lat": "40.6234628927045950",
        "lon": "22.9621016979217530"
    },
    {
        "device_id": "75",
        "device_Name": "Thess4",
        "lat": "40.6357354052651800",
        "lon": "22.9443924129009250"
    },
    {
        "device_id": "76",
        "device_Name": "iTravel-76-Galatista",
        "lat": "40.4664587348245280",
        "lon": "23.2350982725620270"
    },
    {
        "device_id": "77",
        "device_Name": "iTravel-77-Nikiti",
        "lat": "40.2227188711460640",
        "lon": "23.6686907708644870"
    },
    {
        "device_id": "78",
        "device_Name": "iTravel-78-Afitos",
        "lat": "40.1010605533676030",
        "lon": "23.4310349822044370"
    },
    {
        "device_id": "79",
        "device_Name": "iTravel-79-Flogita",
        "lat": "40.2633862034169210",
        "lon": "23.2510399818420410"
    },
    {
        "device_id": "80",
        "device_Name": "iTravel-80-Lakoma",
        "lat": "40.3877049463578710",
        "lon": "23.0370613932609560"
    },
    {
        "device_id": "93",
        "device_Name": "iTravel_Malgara",
        "lat": "40.6053700000000010",
        "lon": "22.7166199999999990"
    }
];

export default stations;
