import { addDataToBp } from './bpBar.js';
import { addDataToLunge } from './lunge.js';
import { addDataToShoulders } from './shoulders.js';
import { addDataToRest } from './rest.js';
import { playPause } from './play.js';


var array = [
    {
        "frame": "1",
        "time": "0.033333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "2",
        "time": "0.066667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "3",
        "time": "0.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "4",
        "time": "0.13333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "5",
        "time": "0.16667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "6",
        "time": "0.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "7",
        "time": "0.23333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "8",
        "time": "0.26667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "9",
        "time": "0.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "10",
        "time": "0.33333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "11",
        "time": "0.36667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "12",
        "time": "0.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "13",
        "time": "0.43333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "14",
        "time": "0.46667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "15",
        "time": "0.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "16",
        "time": "0.53333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "17",
        "time": "0.56667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "18",
        "time": "0.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "19",
        "time": "0.63333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "20",
        "time": "0.66667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "21",
        "time": "0.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "22",
        "time": "0.73333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "23",
        "time": "0.76667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "24",
        "time": "0.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "25",
        "time": "0.83333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "26",
        "time": "0.86667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "27",
        "time": "0.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "28",
        "time": "0.93333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "29",
        "time": "0.96667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "30",
        "time": "1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "31",
        "time": "1.0333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "32",
        "time": "1.0667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "33",
        "time": "1.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "34",
        "time": "1.1333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "35",
        "time": "1.1667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "36",
        "time": "1.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "37",
        "time": "1.2333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "38",
        "time": "1.2667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "39",
        "time": "1.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "40",
        "time": "1.3333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "41",
        "time": "1.3667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "42",
        "time": "1.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "43",
        "time": "1.4333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "44",
        "time": "1.4667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "45",
        "time": "1.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "46",
        "time": "1.5333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "47",
        "time": "1.5667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "48",
        "time": "1.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "49",
        "time": "1.6333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "50",
        "time": "1.6667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "51",
        "time": "1.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "52",
        "time": "1.7333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "53",
        "time": "1.7667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "54",
        "time": "1.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "55",
        "time": "1.8333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "56",
        "time": "1.8667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "57",
        "time": "1.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "58",
        "time": "1.9333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "59",
        "time": "1.9667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "60",
        "time": "2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "61",
        "time": "2.0333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "62",
        "time": "2.0667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "63",
        "time": "2.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "64",
        "time": "2.1333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "65",
        "time": "2.1667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "66",
        "time": "2.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "67",
        "time": "2.2333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "68",
        "time": "2.2667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "69",
        "time": "2.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "70",
        "time": "2.3333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "71",
        "time": "2.3667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "72",
        "time": "2.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "73",
        "time": "2.4333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "74",
        "time": "2.4667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "75",
        "time": "2.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "76",
        "time": "2.5333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "77",
        "time": "2.5667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "78",
        "time": "2.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "79",
        "time": "2.6333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "80",
        "time": "2.6667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "81",
        "time": "2.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "82",
        "time": "2.7333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "83",
        "time": "2.7667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "84",
        "time": "2.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "85",
        "time": "2.8333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "86",
        "time": "2.8667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "87",
        "time": "2.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "88",
        "time": "2.9333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "89",
        "time": "2.9667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "90",
        "time": "3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "91",
        "time": "3.0333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "92",
        "time": "3.0667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "93",
        "time": "3.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "94",
        "time": "3.1333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "95",
        "time": "3.1667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "96",
        "time": "3.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "97",
        "time": "3.2333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "98",
        "time": "3.2667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "99",
        "time": "3.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "100",
        "time": "3.3333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "101",
        "time": "3.3667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "102",
        "time": "3.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "103",
        "time": "3.4333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "104",
        "time": "3.4667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "105",
        "time": "3.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "106",
        "time": "3.5333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "107",
        "time": "3.5667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "108",
        "time": "3.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "109",
        "time": "3.6333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "110",
        "time": "3.6667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "111",
        "time": "3.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "112",
        "time": "3.7333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "113",
        "time": "3.7667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "114",
        "time": "3.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "115",
        "time": "3.8333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "116",
        "time": "3.8667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "117",
        "time": "3.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "118",
        "time": "3.9333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "119",
        "time": "3.9667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "120",
        "time": "4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "121",
        "time": "4.0333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "122",
        "time": "4.0667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "123",
        "time": "4.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "124",
        "time": "4.1333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "125",
        "time": "4.1667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "126",
        "time": "4.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "127",
        "time": "4.2333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "128",
        "time": "4.2667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "129",
        "time": "4.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "130",
        "time": "4.3333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "131",
        "time": "4.3667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "132",
        "time": "4.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "133",
        "time": "4.4333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "134",
        "time": "4.4667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "135",
        "time": "4.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "136",
        "time": "4.5333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "137",
        "time": "4.5667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "138",
        "time": "4.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "139",
        "time": "4.6333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "140",
        "time": "4.6667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "141",
        "time": "4.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "142",
        "time": "4.7333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "143",
        "time": "4.7667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "144",
        "time": "4.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "145",
        "time": "4.8333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "146",
        "time": "4.8667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "147",
        "time": "4.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "148",
        "time": "4.9333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "149",
        "time": "4.9667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "150",
        "time": "5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "151",
        "time": "5.0333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "152",
        "time": "5.0667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "153",
        "time": "5.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "154",
        "time": "5.1333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "155",
        "time": "5.1667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "156",
        "time": "5.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "157",
        "time": "5.2333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "158",
        "time": "5.2667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "159",
        "time": "5.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "160",
        "time": "5.3333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "161",
        "time": "5.3667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "162",
        "time": "5.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "163",
        "time": "5.4333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "164",
        "time": "5.4667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "165",
        "time": "5.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "166",
        "time": "5.5333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "167",
        "time": "5.5667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "168",
        "time": "5.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "169",
        "time": "5.6333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "170",
        "time": "5.6667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "171",
        "time": "5.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "172",
        "time": "5.7333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "173",
        "time": "5.7667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "174",
        "time": "5.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "175",
        "time": "5.8333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "176",
        "time": "5.8667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "177",
        "time": "5.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "178",
        "time": "5.9333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "179",
        "time": "5.9667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "180",
        "time": "6",
        "work_time": "1",
        "exer": "bp_reps"
    },
    {
        "frame": "181",
        "time": "6.0333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "182",
        "time": "6.0667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "183",
        "time": "6.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "184",
        "time": "6.1333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "185",
        "time": "6.1667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "186",
        "time": "6.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "187",
        "time": "6.2333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "188",
        "time": "6.2667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "189",
        "time": "6.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "190",
        "time": "6.3333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "191",
        "time": "6.3667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "192",
        "time": "6.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "193",
        "time": "6.4333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "194",
        "time": "6.4667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "195",
        "time": "6.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "196",
        "time": "6.5333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "197",
        "time": "6.5667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "198",
        "time": "6.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "199",
        "time": "6.6333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "200",
        "time": "6.6667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "201",
        "time": "6.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "202",
        "time": "6.7333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "203",
        "time": "6.7667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "204",
        "time": "6.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "205",
        "time": "6.8333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "206",
        "time": "6.8667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "207",
        "time": "6.9",
        "work_time": "1",
        "exer": "bp_reps"
    },
    {
        "frame": "208",
        "time": "6.9333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "209",
        "time": "6.9667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "210",
        "time": "7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "211",
        "time": "7.0333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "212",
        "time": "7.0667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "213",
        "time": "7.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "214",
        "time": "7.1333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "215",
        "time": "7.1667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "216",
        "time": "7.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "217",
        "time": "7.2333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "218",
        "time": "7.2667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "219",
        "time": "7.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "220",
        "time": "7.3333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "221",
        "time": "7.3667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "222",
        "time": "7.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "223",
        "time": "7.4333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "224",
        "time": "7.4667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "225",
        "time": "7.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "226",
        "time": "7.5333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "227",
        "time": "7.5667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "228",
        "time": "7.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "229",
        "time": "7.6333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "230",
        "time": "7.6667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "231",
        "time": "7.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "232",
        "time": "7.7333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "233",
        "time": "7.7667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "234",
        "time": "7.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "235",
        "time": "7.8333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "236",
        "time": "7.8667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "237",
        "time": "7.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "238",
        "time": "7.9333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "239",
        "time": "7.9667",
        "work_time": "1",
        "exer": "bp_reps"
    },
    {
        "frame": "240",
        "time": "8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "241",
        "time": "8.0333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "242",
        "time": "8.0667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "243",
        "time": "8.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "244",
        "time": "8.1333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "245",
        "time": "8.1667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "246",
        "time": "8.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "247",
        "time": "8.2333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "248",
        "time": "8.2667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "249",
        "time": "8.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "250",
        "time": "8.3333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "251",
        "time": "8.3667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "252",
        "time": "8.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "253",
        "time": "8.4333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "254",
        "time": "8.4667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "255",
        "time": "8.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "256",
        "time": "8.5333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "257",
        "time": "8.5667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "258",
        "time": "8.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "259",
        "time": "8.6333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "260",
        "time": "8.6667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "261",
        "time": "8.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "262",
        "time": "8.7333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "263",
        "time": "8.7667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "264",
        "time": "8.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "265",
        "time": "8.8333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "266",
        "time": "8.8667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "267",
        "time": "8.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "268",
        "time": "8.9333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "269",
        "time": "8.9667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "270",
        "time": "9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "271",
        "time": "9.0333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "272",
        "time": "9.0667",
        "work_time": "1",
        "exer": "bp_reps"
    },
    {
        "frame": "273",
        "time": "9.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "274",
        "time": "9.1333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "275",
        "time": "9.1667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "276",
        "time": "9.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "277",
        "time": "9.2333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "278",
        "time": "9.2667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "279",
        "time": "9.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "280",
        "time": "9.3333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "281",
        "time": "9.3667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "282",
        "time": "9.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "283",
        "time": "9.4333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "284",
        "time": "9.4667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "285",
        "time": "9.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "286",
        "time": "9.5333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "287",
        "time": "9.5667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "288",
        "time": "9.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "289",
        "time": "9.6333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "290",
        "time": "9.6667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "291",
        "time": "9.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "292",
        "time": "9.7333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "293",
        "time": "9.7667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "294",
        "time": "9.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "295",
        "time": "9.8333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "296",
        "time": "9.8667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "297",
        "time": "9.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "298",
        "time": "9.9333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "299",
        "time": "9.9667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "300",
        "time": "10",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "301",
        "time": "10.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "302",
        "time": "10.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "303",
        "time": "10.1",
        "work_time": "1",
        "exer": "bp_reps"
    },
    {
        "frame": "304",
        "time": "10.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "305",
        "time": "10.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "306",
        "time": "10.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "307",
        "time": "10.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "308",
        "time": "10.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "309",
        "time": "10.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "310",
        "time": "10.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "311",
        "time": "10.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "312",
        "time": "10.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "313",
        "time": "10.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "314",
        "time": "10.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "315",
        "time": "10.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "316",
        "time": "10.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "317",
        "time": "10.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "318",
        "time": "10.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "319",
        "time": "10.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "320",
        "time": "10.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "321",
        "time": "10.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "322",
        "time": "10.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "323",
        "time": "10.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "324",
        "time": "10.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "325",
        "time": "10.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "326",
        "time": "10.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "327",
        "time": "10.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "328",
        "time": "10.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "329",
        "time": "10.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "330",
        "time": "11",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "331",
        "time": "11.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "332",
        "time": "11.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "333",
        "time": "11.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "334",
        "time": "11.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "335",
        "time": "11.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "336",
        "time": "11.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "337",
        "time": "11.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "338",
        "time": "11.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "339",
        "time": "11.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "340",
        "time": "11.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "341",
        "time": "11.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "342",
        "time": "11.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "343",
        "time": "11.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "344",
        "time": "11.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "345",
        "time": "11.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "346",
        "time": "11.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "347",
        "time": "11.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "348",
        "time": "11.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "349",
        "time": "11.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "350",
        "time": "11.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "351",
        "time": "11.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "352",
        "time": "11.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "353",
        "time": "11.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "354",
        "time": "11.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "355",
        "time": "11.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "356",
        "time": "11.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "357",
        "time": "11.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "358",
        "time": "11.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "359",
        "time": "11.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "360",
        "time": "12",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "361",
        "time": "12.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "362",
        "time": "12.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "363",
        "time": "12.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "364",
        "time": "12.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "365",
        "time": "12.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "366",
        "time": "12.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "367",
        "time": "12.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "368",
        "time": "12.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "369",
        "time": "12.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "370",
        "time": "12.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "371",
        "time": "12.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "372",
        "time": "12.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "373",
        "time": "12.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "374",
        "time": "12.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "375",
        "time": "12.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "376",
        "time": "12.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "377",
        "time": "12.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "378",
        "time": "12.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "379",
        "time": "12.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "380",
        "time": "12.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "381",
        "time": "12.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "382",
        "time": "12.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "383",
        "time": "12.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "384",
        "time": "12.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "385",
        "time": "12.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "386",
        "time": "12.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "387",
        "time": "12.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "388",
        "time": "12.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "389",
        "time": "12.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "390",
        "time": "13",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "391",
        "time": "13.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "392",
        "time": "13.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "393",
        "time": "13.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "394",
        "time": "13.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "395",
        "time": "13.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "396",
        "time": "13.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "397",
        "time": "13.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "398",
        "time": "13.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "399",
        "time": "13.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "400",
        "time": "13.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "401",
        "time": "13.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "402",
        "time": "13.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "403",
        "time": "13.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "404",
        "time": "13.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "405",
        "time": "13.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "406",
        "time": "13.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "407",
        "time": "13.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "408",
        "time": "13.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "409",
        "time": "13.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "410",
        "time": "13.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "411",
        "time": "13.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "412",
        "time": "13.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "413",
        "time": "13.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "414",
        "time": "13.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "415",
        "time": "13.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "416",
        "time": "13.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "417",
        "time": "13.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "418",
        "time": "13.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "419",
        "time": "13.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "420",
        "time": "14",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "421",
        "time": "14.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "422",
        "time": "14.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "423",
        "time": "14.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "424",
        "time": "14.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "425",
        "time": "14.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "426",
        "time": "14.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "427",
        "time": "14.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "428",
        "time": "14.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "429",
        "time": "14.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "430",
        "time": "14.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "431",
        "time": "14.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "432",
        "time": "14.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "433",
        "time": "14.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "434",
        "time": "14.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "435",
        "time": "14.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "436",
        "time": "14.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "437",
        "time": "14.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "438",
        "time": "14.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "439",
        "time": "14.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "440",
        "time": "14.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "441",
        "time": "14.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "442",
        "time": "14.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "443",
        "time": "14.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "444",
        "time": "14.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "445",
        "time": "14.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "446",
        "time": "14.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "447",
        "time": "14.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "448",
        "time": "14.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "449",
        "time": "14.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "450",
        "time": "15",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "451",
        "time": "15.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "452",
        "time": "15.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "453",
        "time": "15.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "454",
        "time": "15.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "455",
        "time": "15.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "456",
        "time": "15.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "457",
        "time": "15.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "458",
        "time": "15.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "459",
        "time": "15.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "460",
        "time": "15.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "461",
        "time": "15.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "462",
        "time": "15.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "463",
        "time": "15.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "464",
        "time": "15.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "465",
        "time": "15.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "466",
        "time": "15.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "467",
        "time": "15.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "468",
        "time": "15.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "469",
        "time": "15.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "470",
        "time": "15.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "471",
        "time": "15.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "472",
        "time": "15.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "473",
        "time": "15.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "474",
        "time": "15.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "475",
        "time": "15.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "476",
        "time": "15.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "477",
        "time": "15.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "478",
        "time": "15.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "479",
        "time": "15.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "480",
        "time": "16",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "481",
        "time": "16.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "482",
        "time": "16.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "483",
        "time": "16.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "484",
        "time": "16.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "485",
        "time": "16.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "486",
        "time": "16.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "487",
        "time": "16.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "488",
        "time": "16.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "489",
        "time": "16.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "490",
        "time": "16.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "491",
        "time": "16.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "492",
        "time": "16.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "493",
        "time": "16.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "494",
        "time": "16.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "495",
        "time": "16.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "496",
        "time": "16.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "497",
        "time": "16.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "498",
        "time": "16.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "499",
        "time": "16.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "500",
        "time": "16.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "501",
        "time": "16.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "502",
        "time": "16.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "503",
        "time": "16.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "504",
        "time": "16.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "505",
        "time": "16.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "506",
        "time": "16.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "507",
        "time": "16.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "508",
        "time": "16.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "509",
        "time": "16.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "510",
        "time": "17",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "511",
        "time": "17.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "512",
        "time": "17.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "513",
        "time": "17.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "514",
        "time": "17.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "515",
        "time": "17.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "516",
        "time": "17.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "517",
        "time": "17.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "518",
        "time": "17.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "519",
        "time": "17.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "520",
        "time": "17.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "521",
        "time": "17.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "522",
        "time": "17.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "523",
        "time": "17.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "524",
        "time": "17.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "525",
        "time": "17.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "526",
        "time": "17.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "527",
        "time": "17.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "528",
        "time": "17.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "529",
        "time": "17.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "530",
        "time": "17.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "531",
        "time": "17.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "532",
        "time": "17.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "533",
        "time": "17.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "534",
        "time": "17.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "535",
        "time": "17.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "536",
        "time": "17.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "537",
        "time": "17.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "538",
        "time": "17.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "539",
        "time": "17.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "540",
        "time": "18",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "541",
        "time": "18.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "542",
        "time": "18.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "543",
        "time": "18.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "544",
        "time": "18.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "545",
        "time": "18.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "546",
        "time": "18.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "547",
        "time": "18.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "548",
        "time": "18.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "549",
        "time": "18.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "550",
        "time": "18.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "551",
        "time": "18.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "552",
        "time": "18.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "553",
        "time": "18.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "554",
        "time": "18.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "555",
        "time": "18.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "556",
        "time": "18.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "557",
        "time": "18.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "558",
        "time": "18.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "559",
        "time": "18.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "560",
        "time": "18.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "561",
        "time": "18.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "562",
        "time": "18.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "563",
        "time": "18.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "564",
        "time": "18.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "565",
        "time": "18.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "566",
        "time": "18.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "567",
        "time": "18.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "568",
        "time": "18.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "569",
        "time": "18.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "570",
        "time": "19",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "571",
        "time": "19.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "572",
        "time": "19.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "573",
        "time": "19.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "574",
        "time": "19.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "575",
        "time": "19.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "576",
        "time": "19.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "577",
        "time": "19.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "578",
        "time": "19.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "579",
        "time": "19.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "580",
        "time": "19.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "581",
        "time": "19.367",
        "work_time": "1",
        "exer": "ll_reps"
    },
    {
        "frame": "582",
        "time": "19.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "583",
        "time": "19.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "584",
        "time": "19.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "585",
        "time": "19.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "586",
        "time": "19.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "587",
        "time": "19.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "588",
        "time": "19.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "589",
        "time": "19.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "590",
        "time": "19.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "591",
        "time": "19.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "592",
        "time": "19.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "593",
        "time": "19.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "594",
        "time": "19.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "595",
        "time": "19.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "596",
        "time": "19.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "597",
        "time": "19.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "598",
        "time": "19.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "599",
        "time": "19.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "600",
        "time": "20",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "601",
        "time": "20.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "602",
        "time": "20.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "603",
        "time": "20.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "604",
        "time": "20.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "605",
        "time": "20.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "606",
        "time": "20.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "607",
        "time": "20.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "608",
        "time": "20.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "609",
        "time": "20.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "610",
        "time": "20.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "611",
        "time": "20.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "612",
        "time": "20.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "613",
        "time": "20.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "614",
        "time": "20.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "615",
        "time": "20.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "616",
        "time": "20.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "617",
        "time": "20.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "618",
        "time": "20.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "619",
        "time": "20.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "620",
        "time": "20.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "621",
        "time": "20.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "622",
        "time": "20.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "623",
        "time": "20.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "624",
        "time": "20.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "625",
        "time": "20.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "626",
        "time": "20.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "627",
        "time": "20.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "628",
        "time": "20.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "629",
        "time": "20.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "630",
        "time": "21",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "631",
        "time": "21.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "632",
        "time": "21.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "633",
        "time": "21.1",
        "work_time": "1",
        "exer": "ll_reps"
    },
    {
        "frame": "634",
        "time": "21.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "635",
        "time": "21.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "636",
        "time": "21.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "637",
        "time": "21.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "638",
        "time": "21.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "639",
        "time": "21.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "640",
        "time": "21.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "641",
        "time": "21.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "642",
        "time": "21.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "643",
        "time": "21.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "644",
        "time": "21.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "645",
        "time": "21.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "646",
        "time": "21.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "647",
        "time": "21.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "648",
        "time": "21.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "649",
        "time": "21.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "650",
        "time": "21.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "651",
        "time": "21.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "652",
        "time": "21.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "653",
        "time": "21.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "654",
        "time": "21.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "655",
        "time": "21.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "656",
        "time": "21.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "657",
        "time": "21.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "658",
        "time": "21.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "659",
        "time": "21.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "660",
        "time": "22",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "661",
        "time": "22.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "662",
        "time": "22.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "663",
        "time": "22.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "664",
        "time": "22.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "665",
        "time": "22.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "666",
        "time": "22.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "667",
        "time": "22.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "668",
        "time": "22.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "669",
        "time": "22.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "670",
        "time": "22.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "671",
        "time": "22.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "672",
        "time": "22.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "673",
        "time": "22.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "674",
        "time": "22.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "675",
        "time": "22.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "676",
        "time": "22.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "677",
        "time": "22.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "678",
        "time": "22.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "679",
        "time": "22.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "680",
        "time": "22.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "681",
        "time": "22.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "682",
        "time": "22.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "683",
        "time": "22.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "684",
        "time": "22.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "685",
        "time": "22.833",
        "work_time": "1",
        "exer": "ll_reps"
    },
    {
        "frame": "686",
        "time": "22.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "687",
        "time": "22.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "688",
        "time": "22.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "689",
        "time": "22.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "690",
        "time": "23",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "691",
        "time": "23.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "692",
        "time": "23.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "693",
        "time": "23.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "694",
        "time": "23.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "695",
        "time": "23.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "696",
        "time": "23.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "697",
        "time": "23.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "698",
        "time": "23.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "699",
        "time": "23.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "700",
        "time": "23.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "701",
        "time": "23.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "702",
        "time": "23.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "703",
        "time": "23.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "704",
        "time": "23.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "705",
        "time": "23.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "706",
        "time": "23.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "707",
        "time": "23.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "708",
        "time": "23.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "709",
        "time": "23.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "710",
        "time": "23.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "711",
        "time": "23.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "712",
        "time": "23.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "713",
        "time": "23.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "714",
        "time": "23.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "715",
        "time": "23.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "716",
        "time": "23.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "717",
        "time": "23.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "718",
        "time": "23.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "719",
        "time": "23.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "720",
        "time": "24",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "721",
        "time": "24.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "722",
        "time": "24.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "723",
        "time": "24.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "724",
        "time": "24.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "725",
        "time": "24.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "726",
        "time": "24.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "727",
        "time": "24.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "728",
        "time": "24.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "729",
        "time": "24.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "730",
        "time": "24.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "731",
        "time": "24.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "732",
        "time": "24.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "733",
        "time": "24.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "734",
        "time": "24.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "735",
        "time": "24.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "736",
        "time": "24.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "737",
        "time": "24.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "738",
        "time": "24.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "739",
        "time": "24.633",
        "work_time": "1",
        "exer": "ll_reps"
    },
    {
        "frame": "740",
        "time": "24.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "741",
        "time": "24.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "742",
        "time": "24.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "743",
        "time": "24.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "744",
        "time": "24.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "745",
        "time": "24.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "746",
        "time": "24.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "747",
        "time": "24.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "748",
        "time": "24.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "749",
        "time": "24.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "750",
        "time": "25",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "751",
        "time": "25.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "752",
        "time": "25.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "753",
        "time": "25.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "754",
        "time": "25.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "755",
        "time": "25.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "756",
        "time": "25.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "757",
        "time": "25.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "758",
        "time": "25.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "759",
        "time": "25.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "760",
        "time": "25.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "761",
        "time": "25.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "762",
        "time": "25.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "763",
        "time": "25.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "764",
        "time": "25.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "765",
        "time": "25.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "766",
        "time": "25.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "767",
        "time": "25.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "768",
        "time": "25.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "769",
        "time": "25.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "770",
        "time": "25.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "771",
        "time": "25.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "772",
        "time": "25.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "773",
        "time": "25.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "774",
        "time": "25.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "775",
        "time": "25.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "776",
        "time": "25.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "777",
        "time": "25.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "778",
        "time": "25.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "779",
        "time": "25.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "780",
        "time": "26",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "781",
        "time": "26.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "782",
        "time": "26.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "783",
        "time": "26.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "784",
        "time": "26.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "785",
        "time": "26.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "786",
        "time": "26.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "787",
        "time": "26.233",
        "work_time": "1",
        "exer": "rl_reps"
    },
    {
        "frame": "788",
        "time": "26.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "789",
        "time": "26.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "790",
        "time": "26.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "791",
        "time": "26.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "792",
        "time": "26.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "793",
        "time": "26.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "794",
        "time": "26.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "795",
        "time": "26.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "796",
        "time": "26.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "797",
        "time": "26.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "798",
        "time": "26.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "799",
        "time": "26.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "800",
        "time": "26.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "801",
        "time": "26.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "802",
        "time": "26.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "803",
        "time": "26.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "804",
        "time": "26.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "805",
        "time": "26.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "806",
        "time": "26.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "807",
        "time": "26.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "808",
        "time": "26.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "809",
        "time": "26.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "810",
        "time": "27",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "811",
        "time": "27.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "812",
        "time": "27.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "813",
        "time": "27.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "814",
        "time": "27.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "815",
        "time": "27.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "816",
        "time": "27.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "817",
        "time": "27.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "818",
        "time": "27.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "819",
        "time": "27.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "820",
        "time": "27.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "821",
        "time": "27.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "822",
        "time": "27.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "823",
        "time": "27.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "824",
        "time": "27.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "825",
        "time": "27.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "826",
        "time": "27.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "827",
        "time": "27.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "828",
        "time": "27.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "829",
        "time": "27.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "830",
        "time": "27.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "831",
        "time": "27.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "832",
        "time": "27.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "833",
        "time": "27.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "834",
        "time": "27.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "835",
        "time": "27.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "836",
        "time": "27.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "837",
        "time": "27.9",
        "work_time": "1",
        "exer": "rl_reps"
    },
    {
        "frame": "838",
        "time": "27.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "839",
        "time": "27.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "840",
        "time": "28",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "841",
        "time": "28.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "842",
        "time": "28.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "843",
        "time": "28.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "844",
        "time": "28.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "845",
        "time": "28.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "846",
        "time": "28.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "847",
        "time": "28.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "848",
        "time": "28.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "849",
        "time": "28.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "850",
        "time": "28.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "851",
        "time": "28.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "852",
        "time": "28.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "853",
        "time": "28.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "854",
        "time": "28.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "855",
        "time": "28.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "856",
        "time": "28.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "857",
        "time": "28.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "858",
        "time": "28.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "859",
        "time": "28.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "860",
        "time": "28.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "861",
        "time": "28.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "862",
        "time": "28.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "863",
        "time": "28.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "864",
        "time": "28.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "865",
        "time": "28.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "866",
        "time": "28.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "867",
        "time": "28.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "868",
        "time": "28.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "869",
        "time": "28.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "870",
        "time": "29",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "871",
        "time": "29.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "872",
        "time": "29.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "873",
        "time": "29.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "874",
        "time": "29.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "875",
        "time": "29.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "876",
        "time": "29.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "877",
        "time": "29.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "878",
        "time": "29.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "879",
        "time": "29.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "880",
        "time": "29.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "881",
        "time": "29.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "882",
        "time": "29.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "883",
        "time": "29.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "884",
        "time": "29.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "885",
        "time": "29.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "886",
        "time": "29.533",
        "work_time": "1",
        "exer": "rl_reps"
    },
    {
        "frame": "887",
        "time": "29.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "888",
        "time": "29.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "889",
        "time": "29.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "890",
        "time": "29.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "891",
        "time": "29.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "892",
        "time": "29.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "893",
        "time": "29.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "894",
        "time": "29.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "895",
        "time": "29.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "896",
        "time": "29.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "897",
        "time": "29.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "898",
        "time": "29.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "899",
        "time": "29.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "900",
        "time": "30",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "901",
        "time": "30.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "902",
        "time": "30.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "903",
        "time": "30.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "904",
        "time": "30.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "905",
        "time": "30.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "906",
        "time": "30.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "907",
        "time": "30.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "908",
        "time": "30.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "909",
        "time": "30.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "910",
        "time": "30.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "911",
        "time": "30.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "912",
        "time": "30.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "913",
        "time": "30.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "914",
        "time": "30.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "915",
        "time": "30.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "916",
        "time": "30.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "917",
        "time": "30.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "918",
        "time": "30.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "919",
        "time": "30.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "920",
        "time": "30.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "921",
        "time": "30.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "922",
        "time": "30.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "923",
        "time": "30.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "924",
        "time": "30.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "925",
        "time": "30.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "926",
        "time": "30.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "927",
        "time": "30.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "928",
        "time": "30.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "929",
        "time": "30.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "930",
        "time": "31",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "931",
        "time": "31.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "932",
        "time": "31.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "933",
        "time": "31.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "934",
        "time": "31.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "935",
        "time": "31.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "936",
        "time": "31.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "937",
        "time": "31.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "938",
        "time": "31.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "939",
        "time": "31.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "940",
        "time": "31.333",
        "work_time": "1",
        "exer": "rl_reps"
    },
    {
        "frame": "941",
        "time": "31.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "942",
        "time": "31.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "943",
        "time": "31.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "944",
        "time": "31.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "945",
        "time": "31.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "946",
        "time": "31.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "947",
        "time": "31.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "948",
        "time": "31.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "949",
        "time": "31.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "950",
        "time": "31.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "951",
        "time": "31.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "952",
        "time": "31.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "953",
        "time": "31.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "954",
        "time": "31.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "955",
        "time": "31.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "956",
        "time": "31.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "957",
        "time": "31.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "958",
        "time": "31.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "959",
        "time": "31.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "960",
        "time": "32",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "961",
        "time": "32.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "962",
        "time": "32.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "963",
        "time": "32.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "964",
        "time": "32.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "965",
        "time": "32.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "966",
        "time": "32.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "967",
        "time": "32.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "968",
        "time": "32.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "969",
        "time": "32.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "970",
        "time": "32.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "971",
        "time": "32.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "972",
        "time": "32.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "973",
        "time": "32.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "974",
        "time": "32.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "975",
        "time": "32.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "976",
        "time": "32.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "977",
        "time": "32.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "978",
        "time": "32.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "979",
        "time": "32.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "980",
        "time": "32.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "981",
        "time": "32.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "982",
        "time": "32.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "983",
        "time": "32.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "984",
        "time": "32.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "985",
        "time": "32.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "986",
        "time": "32.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "987",
        "time": "32.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "988",
        "time": "32.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "989",
        "time": "32.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "990",
        "time": "33",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "991",
        "time": "33.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "992",
        "time": "33.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "993",
        "time": "33.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "994",
        "time": "33.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "995",
        "time": "33.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "996",
        "time": "33.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "997",
        "time": "33.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "998",
        "time": "33.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "999",
        "time": "33.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1000",
        "time": "33.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1001",
        "time": "33.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1002",
        "time": "33.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1003",
        "time": "33.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1004",
        "time": "33.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1005",
        "time": "33.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1006",
        "time": "33.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1007",
        "time": "33.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1008",
        "time": "33.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1009",
        "time": "33.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1010",
        "time": "33.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1011",
        "time": "33.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1012",
        "time": "33.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1013",
        "time": "33.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1014",
        "time": "33.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1015",
        "time": "33.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1016",
        "time": "33.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1017",
        "time": "33.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1018",
        "time": "33.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1019",
        "time": "33.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1020",
        "time": "34",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1021",
        "time": "34.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1022",
        "time": "34.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1023",
        "time": "34.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1024",
        "time": "34.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1025",
        "time": "34.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1026",
        "time": "34.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1027",
        "time": "34.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1028",
        "time": "34.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1029",
        "time": "34.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1030",
        "time": "34.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1031",
        "time": "34.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1032",
        "time": "34.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1033",
        "time": "34.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1034",
        "time": "34.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1035",
        "time": "34.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1036",
        "time": "34.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1037",
        "time": "34.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1038",
        "time": "34.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1039",
        "time": "34.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1040",
        "time": "34.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1041",
        "time": "34.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1042",
        "time": "34.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1043",
        "time": "34.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1044",
        "time": "34.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1045",
        "time": "34.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1046",
        "time": "34.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1047",
        "time": "34.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1048",
        "time": "34.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1049",
        "time": "34.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1050",
        "time": "35",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1051",
        "time": "35.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1052",
        "time": "35.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1053",
        "time": "35.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1054",
        "time": "35.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1055",
        "time": "35.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1056",
        "time": "35.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1057",
        "time": "35.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1058",
        "time": "35.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1059",
        "time": "35.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1060",
        "time": "35.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1061",
        "time": "35.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1062",
        "time": "35.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1063",
        "time": "35.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1064",
        "time": "35.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1065",
        "time": "35.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1066",
        "time": "35.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1067",
        "time": "35.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1068",
        "time": "35.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1069",
        "time": "35.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1070",
        "time": "35.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1071",
        "time": "35.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1072",
        "time": "35.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1073",
        "time": "35.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1074",
        "time": "35.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1075",
        "time": "35.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1076",
        "time": "35.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1077",
        "time": "35.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1078",
        "time": "35.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1079",
        "time": "35.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1080",
        "time": "36",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1081",
        "time": "36.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1082",
        "time": "36.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1083",
        "time": "36.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1084",
        "time": "36.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1085",
        "time": "36.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1086",
        "time": "36.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1087",
        "time": "36.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1088",
        "time": "36.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1089",
        "time": "36.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1090",
        "time": "36.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1091",
        "time": "36.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1092",
        "time": "36.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1093",
        "time": "36.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1094",
        "time": "36.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1095",
        "time": "36.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1096",
        "time": "36.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1097",
        "time": "36.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1098",
        "time": "36.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1099",
        "time": "36.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1100",
        "time": "36.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1101",
        "time": "36.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1102",
        "time": "36.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1103",
        "time": "36.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1104",
        "time": "36.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1105",
        "time": "36.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1106",
        "time": "36.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1107",
        "time": "36.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1108",
        "time": "36.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1109",
        "time": "36.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1110",
        "time": "37",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1111",
        "time": "37.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1112",
        "time": "37.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1113",
        "time": "37.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1114",
        "time": "37.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1115",
        "time": "37.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1116",
        "time": "37.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1117",
        "time": "37.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1118",
        "time": "37.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1119",
        "time": "37.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1120",
        "time": "37.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1121",
        "time": "37.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1122",
        "time": "37.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1123",
        "time": "37.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1124",
        "time": "37.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1125",
        "time": "37.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1126",
        "time": "37.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1127",
        "time": "37.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1128",
        "time": "37.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1129",
        "time": "37.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1130",
        "time": "37.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1131",
        "time": "37.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1132",
        "time": "37.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1133",
        "time": "37.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1134",
        "time": "37.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1135",
        "time": "37.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1136",
        "time": "37.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1137",
        "time": "37.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1138",
        "time": "37.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1139",
        "time": "37.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1140",
        "time": "38",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1141",
        "time": "38.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1142",
        "time": "38.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1143",
        "time": "38.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1144",
        "time": "38.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1145",
        "time": "38.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1146",
        "time": "38.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1147",
        "time": "38.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1148",
        "time": "38.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1149",
        "time": "38.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1150",
        "time": "38.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1151",
        "time": "38.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1152",
        "time": "38.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1153",
        "time": "38.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1154",
        "time": "38.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1155",
        "time": "38.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1156",
        "time": "38.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1157",
        "time": "38.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1158",
        "time": "38.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1159",
        "time": "38.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1160",
        "time": "38.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1161",
        "time": "38.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1162",
        "time": "38.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1163",
        "time": "38.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1164",
        "time": "38.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1165",
        "time": "38.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1166",
        "time": "38.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1167",
        "time": "38.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1168",
        "time": "38.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1169",
        "time": "38.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1170",
        "time": "39",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1171",
        "time": "39.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1172",
        "time": "39.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1173",
        "time": "39.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1174",
        "time": "39.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1175",
        "time": "39.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1176",
        "time": "39.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1177",
        "time": "39.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1178",
        "time": "39.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1179",
        "time": "39.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1180",
        "time": "39.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1181",
        "time": "39.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1182",
        "time": "39.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1183",
        "time": "39.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1184",
        "time": "39.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1185",
        "time": "39.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1186",
        "time": "39.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1187",
        "time": "39.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1188",
        "time": "39.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1189",
        "time": "39.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1190",
        "time": "39.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1191",
        "time": "39.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1192",
        "time": "39.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1193",
        "time": "39.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1194",
        "time": "39.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1195",
        "time": "39.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1196",
        "time": "39.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1197",
        "time": "39.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1198",
        "time": "39.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1199",
        "time": "39.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1200",
        "time": "40",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1201",
        "time": "40.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1202",
        "time": "40.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1203",
        "time": "40.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1204",
        "time": "40.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1205",
        "time": "40.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1206",
        "time": "40.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1207",
        "time": "40.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1208",
        "time": "40.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1209",
        "time": "40.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1210",
        "time": "40.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1211",
        "time": "40.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1212",
        "time": "40.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1213",
        "time": "40.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1214",
        "time": "40.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1215",
        "time": "40.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1216",
        "time": "40.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1217",
        "time": "40.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1218",
        "time": "40.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1219",
        "time": "40.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1220",
        "time": "40.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1221",
        "time": "40.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1222",
        "time": "40.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1223",
        "time": "40.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1224",
        "time": "40.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1225",
        "time": "40.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1226",
        "time": "40.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1227",
        "time": "40.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1228",
        "time": "40.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1229",
        "time": "40.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1230",
        "time": "41",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1231",
        "time": "41.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1232",
        "time": "41.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1233",
        "time": "41.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1234",
        "time": "41.133",
        "work_time": "1",
        "exer": "s_reps"
    },
    {
        "frame": "1235",
        "time": "41.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1236",
        "time": "41.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1237",
        "time": "41.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1238",
        "time": "41.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1239",
        "time": "41.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1240",
        "time": "41.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1241",
        "time": "41.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1242",
        "time": "41.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1243",
        "time": "41.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1244",
        "time": "41.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1245",
        "time": "41.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1246",
        "time": "41.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1247",
        "time": "41.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1248",
        "time": "41.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1249",
        "time": "41.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1250",
        "time": "41.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1251",
        "time": "41.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1252",
        "time": "41.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1253",
        "time": "41.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1254",
        "time": "41.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1255",
        "time": "41.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1256",
        "time": "41.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1257",
        "time": "41.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1258",
        "time": "41.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1259",
        "time": "41.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1260",
        "time": "42",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1261",
        "time": "42.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1262",
        "time": "42.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1263",
        "time": "42.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1264",
        "time": "42.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1265",
        "time": "42.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1266",
        "time": "42.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1267",
        "time": "42.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1268",
        "time": "42.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1269",
        "time": "42.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1270",
        "time": "42.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1271",
        "time": "42.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1272",
        "time": "42.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1273",
        "time": "42.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1274",
        "time": "42.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1275",
        "time": "42.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1276",
        "time": "42.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1277",
        "time": "42.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1278",
        "time": "42.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1279",
        "time": "42.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1280",
        "time": "42.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1281",
        "time": "42.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1282",
        "time": "42.733",
        "work_time": "1",
        "exer": "s_reps"
    },
    {
        "frame": "1283",
        "time": "42.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1284",
        "time": "42.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1285",
        "time": "42.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1286",
        "time": "42.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1287",
        "time": "42.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1288",
        "time": "42.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1289",
        "time": "42.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1290",
        "time": "43",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1291",
        "time": "43.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1292",
        "time": "43.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1293",
        "time": "43.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1294",
        "time": "43.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1295",
        "time": "43.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1296",
        "time": "43.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1297",
        "time": "43.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1298",
        "time": "43.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1299",
        "time": "43.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1300",
        "time": "43.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1301",
        "time": "43.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1302",
        "time": "43.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1303",
        "time": "43.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1304",
        "time": "43.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1305",
        "time": "43.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1306",
        "time": "43.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1307",
        "time": "43.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1308",
        "time": "43.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1309",
        "time": "43.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1310",
        "time": "43.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1311",
        "time": "43.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1312",
        "time": "43.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1313",
        "time": "43.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1314",
        "time": "43.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1315",
        "time": "43.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1316",
        "time": "43.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1317",
        "time": "43.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1318",
        "time": "43.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1319",
        "time": "43.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1320",
        "time": "44",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1321",
        "time": "44.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1322",
        "time": "44.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1323",
        "time": "44.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1324",
        "time": "44.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1325",
        "time": "44.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1326",
        "time": "44.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1327",
        "time": "44.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1328",
        "time": "44.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1329",
        "time": "44.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1330",
        "time": "44.333",
        "work_time": "1",
        "exer": "s_reps"
    },
    {
        "frame": "1331",
        "time": "44.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1332",
        "time": "44.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1333",
        "time": "44.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1334",
        "time": "44.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1335",
        "time": "44.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1336",
        "time": "44.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1337",
        "time": "44.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1338",
        "time": "44.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1339",
        "time": "44.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1340",
        "time": "44.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1341",
        "time": "44.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1342",
        "time": "44.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1343",
        "time": "44.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1344",
        "time": "44.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1345",
        "time": "44.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1346",
        "time": "44.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1347",
        "time": "44.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1348",
        "time": "44.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1349",
        "time": "44.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1350",
        "time": "45",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1351",
        "time": "45.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1352",
        "time": "45.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1353",
        "time": "45.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1354",
        "time": "45.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1355",
        "time": "45.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1356",
        "time": "45.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1357",
        "time": "45.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1358",
        "time": "45.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1359",
        "time": "45.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1360",
        "time": "45.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1361",
        "time": "45.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1362",
        "time": "45.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1363",
        "time": "45.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1364",
        "time": "45.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1365",
        "time": "45.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1366",
        "time": "45.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1367",
        "time": "45.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1368",
        "time": "45.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1369",
        "time": "45.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1370",
        "time": "45.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1371",
        "time": "45.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1372",
        "time": "45.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1373",
        "time": "45.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1374",
        "time": "45.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1375",
        "time": "45.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1376",
        "time": "45.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1377",
        "time": "45.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1378",
        "time": "45.933",
        "work_time": "1",
        "exer": "s_reps"
    },
    {
        "frame": "1379",
        "time": "45.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1380",
        "time": "46",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1381",
        "time": "46.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1382",
        "time": "46.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1383",
        "time": "46.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1384",
        "time": "46.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1385",
        "time": "46.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1386",
        "time": "46.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1387",
        "time": "46.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1388",
        "time": "46.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1389",
        "time": "46.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1390",
        "time": "46.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1391",
        "time": "46.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1392",
        "time": "46.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1393",
        "time": "46.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1394",
        "time": "46.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1395",
        "time": "46.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1396",
        "time": "46.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1397",
        "time": "46.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1398",
        "time": "46.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1399",
        "time": "46.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1400",
        "time": "46.667",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1401",
        "time": "46.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1402",
        "time": "46.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1403",
        "time": "46.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1404",
        "time": "46.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1405",
        "time": "46.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1406",
        "time": "46.867",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1407",
        "time": "46.9",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1408",
        "time": "46.933",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1409",
        "time": "46.967",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1410",
        "time": "47",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1411",
        "time": "47.033",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1412",
        "time": "47.067",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1413",
        "time": "47.1",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1414",
        "time": "47.133",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1415",
        "time": "47.167",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1416",
        "time": "47.2",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1417",
        "time": "47.233",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1418",
        "time": "47.267",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1419",
        "time": "47.3",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1420",
        "time": "47.333",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1421",
        "time": "47.367",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1422",
        "time": "47.4",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1423",
        "time": "47.433",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1424",
        "time": "47.467",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1425",
        "time": "47.5",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1426",
        "time": "47.533",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1427",
        "time": "47.567",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1428",
        "time": "47.6",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1429",
        "time": "47.633",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1430",
        "time": "47.667",
        "work_time": "1",
        "exer": "s_reps"
    },
    {
        "frame": "1431",
        "time": "47.7",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1432",
        "time": "47.733",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1433",
        "time": "47.767",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1434",
        "time": "47.8",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1435",
        "time": "47.833",
        "work_time": "1",
        "exer": "rest"
    },
    {
        "frame": "1436",
        "time": "47.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1437",
        "time": "47.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1438",
        "time": "47.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1439",
        "time": "47.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1440",
        "time": "48",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1441",
        "time": "48.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1442",
        "time": "48.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1443",
        "time": "48.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1444",
        "time": "48.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1445",
        "time": "48.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1446",
        "time": "48.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1447",
        "time": "48.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1448",
        "time": "48.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1449",
        "time": "48.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1450",
        "time": "48.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1451",
        "time": "48.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1452",
        "time": "48.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1453",
        "time": "48.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1454",
        "time": "48.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1455",
        "time": "48.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1456",
        "time": "48.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1457",
        "time": "48.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1458",
        "time": "48.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1459",
        "time": "48.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1460",
        "time": "48.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1461",
        "time": "48.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1462",
        "time": "48.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1463",
        "time": "48.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1464",
        "time": "48.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1465",
        "time": "48.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1466",
        "time": "48.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1467",
        "time": "48.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1468",
        "time": "48.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1469",
        "time": "48.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1470",
        "time": "49",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1471",
        "time": "49.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1472",
        "time": "49.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1473",
        "time": "49.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1474",
        "time": "49.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1475",
        "time": "49.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1476",
        "time": "49.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1477",
        "time": "49.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1478",
        "time": "49.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1479",
        "time": "49.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1480",
        "time": "49.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1481",
        "time": "49.367",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1482",
        "time": "49.4",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1483",
        "time": "49.433",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1484",
        "time": "49.467",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1485",
        "time": "49.5",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1486",
        "time": "49.533",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1487",
        "time": "49.567",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1488",
        "time": "49.6",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1489",
        "time": "49.633",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1490",
        "time": "49.667",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1491",
        "time": "49.7",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1492",
        "time": "49.733",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1493",
        "time": "49.767",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1494",
        "time": "49.8",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1495",
        "time": "49.833",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1496",
        "time": "49.867",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1497",
        "time": "49.9",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1498",
        "time": "49.933",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1499",
        "time": "49.967",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1500",
        "time": "50",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1501",
        "time": "50.033",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1502",
        "time": "50.067",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1503",
        "time": "50.1",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1504",
        "time": "50.133",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1505",
        "time": "50.167",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1506",
        "time": "50.2",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1507",
        "time": "50.233",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1508",
        "time": "50.267",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1509",
        "time": "50.3",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1510",
        "time": "50.333",
        "work_time": "0",
        "exer": "rest"
    },
    {
        "frame": "1511",
        "time": "50.367",
        "work_time": "0",
        "exer": "rest"
    }
]

array = JSON.stringify(array);
array = JSON.parse(array);

window.onload = pageLoad;
function pageLoad() {

    var startButton = document.getElementById("start");
    startButton.onclick = start;
}


function start() {
    getChart();
    playPause();
}


var i = -1;
var reps = 0;
var work_sum = 0;
var rest_sum = 0;

function getChart() {

    var work_time;
    var exer;
    var type;



    // time = array[i].time;

    var intervalObj = setInterval(() => {

        i++;

        if (!array[i]) {
            console.log('Done');
            clearInterval(intervalObj);

        } else {

            exer = array[i].exer;
            work_time = array[i].work_time;

            if (work_time == 0) {

                addDataToRest(false);


            } else if (work_time == 1) {


                if (exer == "bp_reps") {
                    type = exer;

                } else if (exer == "ll_reps") {
                    type = exer;

                } else if (exer == "rl_reps") {
                    type = exer;

                } else if (exer == "s_reps") {
                    type = exer;

                }

                addDataToRest(true);

                if (type) {
                    reps++;
                    var fun = cahrtHandler[type];
                    fun();
                    type = null;
                }

            }

        }






        //clearing
        // getClearInterval(reps, intervalObj);

    }, 33);
}


var cahrtHandler = {

    "bp_reps": addDataToBp,
    "ll_reps": addDataToLunge,
    "rl_reps": addDataToLunge,
    "s_reps": addDataToShoulders

}



/** 
 * Clearing the interval object
*/
function getClearInterval(reps, intervalObj) {

    if (reps == 5) {
        // console.log('==');
        // console.log("Bp is done");
        // console.log('==');

    } else if (reps == 9) {
        // clearInterval(intervalObj);
        // console.log('==');
        // console.log("Lunge is done");
        // console.log('==');

    } else if (reps == 14) {
        // clearInterval(intervalObj);
        // console.log('==');
        // console.log("Shoulders is done");
        // console.log('==');

    } else if (reps == 19) {
        clearInterval(intervalObj);
        // console.log('==');
        // console.log("Rest is done");
        // console.log('==');
    }
}