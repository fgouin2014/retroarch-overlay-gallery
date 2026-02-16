const OVERLAY_MANIFEST = [
    {
        "name": "Pro Controller",
        "path": "pro-controller.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "pro-portrait.svg",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "pro-landscape.svg",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 2\n\noverlay0_overlay = pro-portrait.svg\noverlay0_full_screen = true\noverlay0_descs = 0\n\noverlay1_overlay = pro-landscape.svg\noverlay1_full_screen = true\noverlay1_descs = 0\n"
    },
    {
        "name": "Retro Classic",
        "path": "extra/retro-classic.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "extra/retro-classic-p.svg",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "extra/retro-classic-l.svg",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 2\noverlay0_overlay = retro-classic-p.svg\noverlay1_overlay = retro-classic-l.svg\n"
    },
    {
        "name": "Gb_Portrait_Beige",
        "path": "extra/Touch-Overlays/Phone/GB/gb_portrait_beige.cfg",
        "modes": [
            {
                "name": "Gb_phone_portrait_beige",
                "image": "extra/Touch-Overlays/Phone/GB/gb_portrait_beige.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/GB/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/GB/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"gb_phone_portrait_beige\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = gb_portrait_beige.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 24\noverlay0_desc0 = \"overlay_next,0.0870652691,0.9288597616,radial,0.0760252691,0.0320802384\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.40684,0.9195420600,radial,0.0718356671,0.0286620600\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.59827,0.9288597616,radial,0.0718356671,0.0286620600\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"dpad_area,0.2371150000,0.7292400000,rect,0.20741,0.08959\"\noverlay0_desc3_range_mod = 1.1\noverlay0_desc3_reach_x = 1.9\noverlay0_desc3_reach_y = 1.5\noverlay0_desc3_range_mod_exclusive = true\noverlay0_desc4 = \"up,0.2369450000,0.6648300000,rect,0.07436,0.01934\"\noverlay0_desc4_reach_x = 0\noverlay0_desc5 = \"up,0.2398450000,0.6652200000,rect,0.06604,0.02693\"\noverlay0_desc5_alpha_mod = 0.001\noverlay0_desc5_reach_x = 0\noverlay0_desc6 = \"abxy_area,0.75226,0.7271200000,rect,0.20503,0.08243\"\noverlay0_desc6_range_mod = 1.1\noverlay0_desc6_reach_x = 1.4\noverlay0_desc6_reach_y = 1.4\noverlay0_desc6_range_mod_exclusive = true\noverlay0_desc7 = \"a,0.83958,0.70503,rect,0.09388,0.04607\"\noverlay0_desc7_alpha_mod = 0.001\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"b,0.65009,0.75289,rect,0.09675,0.04379\"\noverlay0_desc8_alpha_mod = 0.001\noverlay0_desc8_reach_x = 0\noverlay0_desc9 = \"a|b,0.74365,0.7242600000,radial,0.03997,0.02032\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"a|b,0.76945,0.7528800000,radial,0.03997,0.02032\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.3765750000,0.6705600000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.0989050000,0.6705600000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.3722850000,0.7907800000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.1060650000,0.7893500000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.3625550000,0.7303300000,rect,0.05806,0.03503\"\noverlay0_desc15_alpha_mod = 0.001\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.2369450000,0.7940600000,rect,0.06517,0.02782\"\noverlay0_desc16_alpha_mod = 0.001\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.1135950000,0.7303300000,rect,0.06248,0.03503\"\noverlay0_desc17_alpha_mod = 0.001\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2366150000,0.8008000000,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.0798350000,0.7292400000,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.4002550000,0.7292400000,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"hold_fast_forward,0.50000,0.59827,radial,0.19195,0.02804\"\noverlay0_desc22 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc22_next_target = \"landscape\"\noverlay0_desc23 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc23_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24077,0.63509,rect,0.21134,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.85177,0.63141,rect,0.13811,0.03871\"\noverlay1_desc1_next_target = \"gb_phone_portrait_beige\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19482,0.8302,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.70871,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.202,0.7124,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.82652,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80008,0.71608,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80075,0.82652,radial,0.07184,0.03503\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 11\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc4_overlay = menu-white.png\noverlay2_desc4_next_target = \"phone_landscape_pause\"\noverlay2_desc5 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc5_overlay = \"d-pad white.png\"\noverlay2_desc5_range_mod_exclusive = true\noverlay2_desc6 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc6_down = b\noverlay2_desc6_right = a\noverlay2_desc6_range_mod_exclusive = true\noverlay2_desc7 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc7_next_target = \"gb_phone_portrait_beige\"\noverlay2_desc8 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"gb_phone_portrait_beige\"\noverlay2_desc10 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc10_next_target = \"gb_phone_portrait_beige\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.1049750000,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1270650000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1307450000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1270650000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9002650000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8744950000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8744950000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8744950000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Gba_Phone_Red",
        "path": "extra/Touch-Overlays/Phone/GBA/gba_phone_red.cfg",
        "modes": [
            {
                "name": "Gba_phone_portrait_red",
                "image": "extra/Touch-Overlays/Phone/GBA/gba_phone_portrait_red.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/GBA/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/GBA/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"gba_phone_portrait_red\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = gba_phone_portrait_red.png\naspect_ratio = 0.56236559139784946237\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.07098,0.87603,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.40447,0.87872,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.58285,0.88209,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.14827,0.6068400000,rect,0.1497,0.01803\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.84719,0.6084300000,rect,0.15296,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.75762,rect,0.20741,0.11042\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.22763,0.6902600000,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22556,0.7009200000,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.75226,0.75493,rect,0.20503,0.1037\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.4\noverlay0_desc8_reach_y = 1.4\noverlay0_desc8_range_mod_exclusive = true\noverlay0_desc9 = \"a,0.84245,0.7109700000,rect,0.10089,0.04587\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.6435,0.7857500000,rect,0.09245,0.04379\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"a|b,0.74365,0.7585900000,radial,0.03997,0.02032\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"a|b,0.75886,0.7485400000,radial,0.03997,0.02032\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"up|right,0.36583,0.6855600000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"up|left,0.09388,0.6855600000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"down|right,0.36583,0.8072200000,rect,0.05916,0.02614\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down|left,0.10104,0.8057900000,rect,0.05916,0.02614\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"right,0.33802,0.7456700000,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.22763,0.8081800000,rect,0.07436,0.04389\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.12049,0.7442400000,rect,0.09698,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"down,0.2273,0.8107700000,rect,0.07738,0.02251\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"left,0.07349,0.7447200000,rect,0.04504,0.03426\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"right,0.40232,0.7440000000,rect,0.04504,0.03426\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.50000,0.5882300000,radial,0.14385,0.03949\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.23862,0.63114,rect,0.21277,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84818,0.64056,rect,0.12388,0.027\"\noverlay1_desc1_next_target = \"gba_phone_portrait_red\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.1977,0.8300600000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50284,0.7148800000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20631,0.7156000000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8293400000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80295,0.7156000000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80941,0.8307700000,rect,0.08641,0.04046\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 11\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"gba_phone_portrait_red\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.88343,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Gba_Phone_Yellow",
        "path": "extra/Touch-Overlays/Phone/GBA/gba_phone_yellow.cfg",
        "modes": [
            {
                "name": "Gba_phone_portrait_yellow",
                "image": "extra/Touch-Overlays/Phone/GBA/gba_phone_portrait_yellow.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/GBA/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/GBA/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"gba_phone_portrait_yellow\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = gba_phone_portrait_yellow.png\naspect_ratio = 0.56236559139784946237\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.07098,0.8793550000,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.41955,0.8807850000,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.58285,0.8807850000,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.14827,0.6007800000,rect,0.1497,0.01803\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.84719,0.6023700000,rect,0.15296,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.7535100000,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.22763,0.7009600000,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22986,0.7116200000,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.75226,0.7592400000,rect,0.20503,0.0891\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.4\noverlay0_desc8_reach_y = 1.4\noverlay0_desc8_range_mod_exclusive = true\noverlay0_desc9 = \"a,0.85465,0.7216700000,rect,0.10089,0.04587\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.65924,0.7907200000,rect,0.09245,0.04379\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"a|b,0.74365,0.7692900000,radial,0.03997,0.02032\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"a|b,0.75886,0.7592400000,radial,0.03997,0.02032\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"up|right,0.36583,0.6962600000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"up|left,0.09388,0.6962600000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"down|right,0.36583,0.8179200000,rect,0.05916,0.02614\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down|left,0.10104,0.8164900000,rect,0.05916,0.02614\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"right,0.33802,0.7563700000,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.22763,0.8188800000,rect,0.07436,0.04389\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.12049,0.7549400000,rect,0.09698,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"down,0.2273,0.8214700000,rect,0.07738,0.02251\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"left,0.07349,0.7554200000,rect,0.04504,0.03426\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"right,0.40232,0.7547000000,rect,0.04504,0.03426\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.50000,0.5821700000,radial,0.14385,0.03949\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.23862,0.63114,rect,0.21277,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84818,0.64056,rect,0.12388,0.027\"\noverlay1_desc1_next_target = \"gba_phone_portrait_yellow\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.1977,0.8300600000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50284,0.7148800000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20631,0.7156000000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8293400000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80295,0.7156000000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80941,0.8307700000,rect,0.08641,0.04046\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 11\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"gba_phone_portrait_yellow\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.88343,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Gba_Phone_Yellow_Animated",
        "path": "extra/Touch-Overlays/Phone/GBA/gba_phone_yellow_animated.cfg",
        "modes": [
            {
                "name": "Gba_phone_portrait_yellow_animated",
                "image": "extra/Touch-Overlays/Phone/GBA/gba_phone_portrait_yellow_animated.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/GBA/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/GBA/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"gba_phone_portrait_yellow_animated\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = gba_phone_portrait_yellow_animated.png\naspect_ratio = 0.56236559139784946237\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.07277,0.8715000000,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc0_exclusive = true\noverlay0_desc1 = \"select,0.41955,0.8657600000,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.58253,0.8686300000,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.13665,0.5797700000,rect,0.16683,0.01931\"\noverlay0_desc3_overlay = gba_portrait_yellow_animated_l.png\noverlay0_desc3_alpha_mod = 0.001\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.86335,0.5797700000,rect,0.16683,0.01931\"\noverlay0_desc4_overlay = gba_portrait_yellow_animated_r.png\noverlay0_desc4_alpha_mod = 0.001\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.7487200000,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.23934,0.6673400000,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.23934,0.67558,rect,0.07362,0.03135\"\noverlay0_desc7_overlay = gba_portrait_yellow_animated_up.png\noverlay0_desc7_alpha_mod = 0.001\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.74336,0.7398600000,rect,0.20503,0.0891\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.4\noverlay0_desc8_reach_y = 1.4\noverlay0_desc8_range_mod_exclusive = true\noverlay0_desc9 = \"a,0.84244,0.69842,rect,0.09646,0.0492\"\noverlay0_desc9_overlay = gba_portrait_yellow_animated_a.png\noverlay0_desc9_alpha_mod = 0.001\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.64643,0.77866,rect,0.09502,0.04449\"\noverlay0_desc10_overlay = gba_portrait_yellow_animated_b.png\noverlay0_desc10_alpha_mod = 0.001\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"a|b,0.74365,0.7334000000,radial,0.03997,0.02032\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"a|b,0.75886,0.7456000000,radial,0.03997,0.02032\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"up|right,0.37216,0.6824200000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"up|left,0.1022,0.6845800000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"down|right,0.36583,0.7987300000,rect,0.05916,0.02614\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down|left,0.10104,0.7987300000,rect,0.05916,0.02614\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"right,0.37003,0.73817,rect,0.06408,0.03503\"\noverlay0_desc17_overlay = gba_portrait_yellow_animated_right.png\noverlay0_desc17_alpha_mod = 0.001\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.23876,0.80075,rect,0.07362,0.03135\"\noverlay0_desc18_overlay = gba_portrait_yellow_animated_down.png\noverlay0_desc18_alpha_mod = 0.001\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.10129,0.74,rect,0.0608,0.03503\"\noverlay0_desc19_overlay = gba_portrait_yellow_animated_left.png\noverlay0_desc19_alpha_mod = 0.001\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"down,0.24436,0.8166800000,rect,0.07738,0.02251\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"left,0.07349,0.7355500000,rect,0.04504,0.03426\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"right,0.40232,0.7348300000,rect,0.04504,0.03426\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.50000,0.5793600000,radial,0.14385,0.03949\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.23862,0.63114,rect,0.21277,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84818,0.64056,rect,0.12388,0.027\"\noverlay1_desc1_next_target = \"gba_phone_portrait_yellow_animated\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.1977,0.8300600000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50284,0.7148800000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20631,0.7156000000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8293400000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80295,0.7156000000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80941,0.8307700000,rect,0.08641,0.04046\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 11\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09761,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"gba_phone_portrait_yellow_animated\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.88343,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Gbc_Phone_Animated_Blue",
        "path": "extra/Touch-Overlays/Phone/GBC/gbc_phone_animated_blue.cfg",
        "modes": [
            {
                "name": "Gbc_phone_portrait_animated_blue",
                "image": "extra/Touch-Overlays/Phone/GBC/gbc_phone_portrait_animated.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/GBC/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/GBC/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"gbc_phone_portrait_animated_blue\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = gbc_phone_portrait_animated.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 23\noverlay0_desc0 = \"overlay_next,0.08386,0.8939450000,radial,0.05462,0.01267\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.39212,0.8902650000,radial,0.05161,0.01132\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.58338,0.8939450000,radial,0.05161,0.01132\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"dpad_area,0.2278,0.7248800000,rect,0.20741,0.08959\"\noverlay0_desc3_range_mod = 1.1\noverlay0_desc3_reach_x = 1.9\noverlay0_desc3_reach_y = 1.5\noverlay0_desc3_range_mod_exclusive = true\noverlay0_desc4 = \"up,0.22763,0.6604700000,rect,0.07436,0.01934\"\noverlay0_desc4_reach_x = 0\noverlay0_desc5 = \"up,0.23053,0.66086,rect,0.06604,0.02693\"\noverlay0_desc5_overlay = gbc_phone_portrait_animated_blue_up.png\noverlay0_desc5_alpha_mod = 0.001\noverlay0_desc5_reach_x = 0\noverlay0_desc6 = \"abxy_area,0.75226,0.7271200000,rect,0.20503,0.08243\"\noverlay0_desc6_range_mod = 1.1\noverlay0_desc6_reach_x = 1.4\noverlay0_desc6_reach_y = 1.4\noverlay0_desc6_range_mod_exclusive = true\noverlay0_desc7 = \"a,0.83958,0.69399,rect,0.09388,0.04607\"\noverlay0_desc7_overlay = gbc_phone_portrait_animated_blue_a.png\noverlay0_desc7_alpha_mod = 0.001\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"b,0.65009,0.75289,rect,0.09675,0.04379\"\noverlay0_desc8_overlay = gbc_phone_portrait_animated_blue_b.png\noverlay0_desc8_alpha_mod = 0.001\noverlay0_desc8_reach_x = 0\noverlay0_desc9 = \"a|b,0.74365,0.7242600000,radial,0.03997,0.02032\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"a|b,0.76945,0.7528800000,radial,0.03997,0.02032\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.36726,0.6662000000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.08959,0.6662000000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.36297,0.7864200000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.09675,0.7849900000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.35324,0.7259700000,rect,0.05806,0.03503\"\noverlay0_desc15_overlay = gbc_phone_portrait_animated_blue_right.png\noverlay0_desc15_alpha_mod = 0.001\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22763,0.7897,rect,0.06517,0.02782\"\noverlay0_desc16_overlay = gbc_phone_portrait_animated_blue_down.png\noverlay0_desc16_alpha_mod = 0.001\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.10428,0.7259700000,rect,0.06248,0.03503\"\noverlay0_desc17_overlay = gbc_phone_portrait_animated_blue_left.png\noverlay0_desc17_alpha_mod = 0.001\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2273,0.7964400000,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.07052,0.7248800000,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.7248800000,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"hold_fast_forward,0.50000,0.59827,radial,0.19195,0.02804\"\noverlay0_desc22 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc22_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24077,0.63509,rect,0.21134,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.85177,0.63141,rect,0.13811,0.03871\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19482,0.8302,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.70871,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.202,0.7124,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.82652,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80008,0.71608,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80075,0.82652,radial,0.07184,0.03503\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 9\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc4_overlay = menu-white.png\noverlay2_desc4_next_target = \"phone_landscape_pause\"\noverlay2_desc5 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc5_overlay = \"d-pad white.png\"\noverlay2_desc5_range_mod_exclusive = true\noverlay2_desc6 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc6_down = b\noverlay2_desc6_right = a\noverlay2_desc6_range_mod_exclusive = true\noverlay2_desc7 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc7_next_target = \"gbc_phone_portrait_animated_blue\"\noverlay2_desc8 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.1049750000,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1270650000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1307450000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1270650000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9002650000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8744950000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8744950000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8744950000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Gbc_Phone_Yellow",
        "path": "extra/Touch-Overlays/Phone/GBC/gbc_phone_yellow.cfg",
        "modes": [
            {
                "name": "Gbc_phone_portrait_yellow",
                "image": "extra/Touch-Overlays/Phone/GBC/gbc_phone_portrait_yellow.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/GBC/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/GBC/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"gbc_phone_portrait_yellow\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = gbc_phone_portrait_yellow.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 23\noverlay0_desc0 = \"overlay_next,0.07492,0.8891400000,radial,0.05462,0.01267\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.40471,0.8877100000,radial,0.05161,0.01132\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.59027,0.8891400000,radial,0.05161,0.01132\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"dpad_area,0.2278,0.7531250000,rect,0.20741,0.09296\"\noverlay0_desc3_range_mod = 1.1\noverlay0_desc3_reach_x = 1.9\noverlay0_desc3_reach_y = 1.5\noverlay0_desc3_range_mod_exclusive = true\noverlay0_desc4 = \"up,0.22763,0.6834750000,rect,0.07436,0.01934\"\noverlay0_desc4_reach_x = 0\noverlay0_desc5 = \"up,0.22763,0.7035850000,rect,0.07436,0.04389\"\noverlay0_desc5_reach_x = 0\noverlay0_desc6 = \"abxy_area,0.70503,0.72712,rect,0.23382,0.12706\"\noverlay0_desc6_range_mod = 1.1\noverlay0_desc6_reach_x = 1.4\noverlay0_desc6_reach_y = 1.4\noverlay0_desc6_range_mod_exclusive = true\noverlay0_desc7 = \"a,0.8412358620,0.7165703086,rect,0.0987543979,0.0464620372\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"b,0.6522526967,0.7936626483,rect,0.0987543979,0.0464620372\"\noverlay0_desc8_reach_x = 0\noverlay0_desc9 = \"a|b,0.7438322534,0.7543922503,radial,0.0391239292,0.0205822667\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"a|b,0.7587202939,0.7543922503,radial,0.0391239292,0.0205822667\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.37537,0.6892250000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.08228,0.6877850000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.37537,0.8148650000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.08228,0.8155850000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.33802,0.7480950000,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22763,0.7990750000,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12049,0.7466650000,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2273,0.8206150000,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.07052,0.7488150000,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.7466650000,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"hold_fast_forward,0.50000,0.60196,radial,0.19195,0.02399\"\noverlay0_desc22 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc22_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.2429200000,0.6394800000,rect,0.21134,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.8539200000,0.6387700000,rect,0.13074,0.03135\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.1969700000,0.8247200000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.5028300000,0.7148700000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.2041500000,0.7155900000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.5028300000,0.8232900000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.8022300000,0.7155900000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.8079700000,0.8197000000,radial,0.07851,0.03543\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 9\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc4_overlay = menu-white.png\noverlay2_desc4_next_target = \"phone_landscape_pause\"\noverlay2_desc5 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc5_overlay = \"d-pad white.png\"\noverlay2_desc5_range_mod_exclusive = true\noverlay2_desc6 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc6_down = b\noverlay2_desc6_right = a\noverlay2_desc6_range_mod_exclusive = true\noverlay2_desc7 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc7_next_target = \"gbc_phone_portrait_yellow\"\noverlay2_desc8 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1253400000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1290200000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1253400000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9039450000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8781750000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8781750000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8781750000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Genesis_Grey",
        "path": "extra/Touch-Overlays/Phone/GENESIS/genesis_grey.cfg",
        "modes": [
            {
                "name": "Genesis_phone_portrait_grey",
                "image": "extra/Touch-Overlays/Phone/GENESIS/genesis_portrait_grey.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/GENESIS/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/GENESIS/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"genesis_phone_portrait_grey\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = genesis_portrait_grey.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.14204,0.91505,radial,0.06535,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"start,0.4569,0.91707,radial,0.06871,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"r,0.80606,0.64729,rect,0.06669,0.02835\"\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"a,0.88612,0.72197,rect,0.06871,0.0344\"\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"dpad_area,0.2278,0.7506650000,rect,0.20741,0.09296\"\noverlay0_desc4_range_mod = 1.1\noverlay0_desc4_reach_x = 1.9\noverlay0_desc4_reach_y = 1.5\noverlay0_desc4_range_mod_exclusive = true\noverlay0_desc5 = \"up,0.22763,0.6817350000,rect,0.07436,0.01934\"\noverlay0_desc5_reach_x = 0\noverlay0_desc6 = \"up,0.22763,0.7039950000,rect,0.07436,0.04389\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"y,0.6311748544,0.8166312454,rect,0.0765792748,0.0352637546\"\noverlay0_desc7_exclusive = true\noverlay0_desc8 = \"b,0.76503,0.7702158647,rect,0.0765792748,0.0352637546\"\noverlay0_desc8_exclusive = true\noverlay0_desc9 = \"up|right,0.37537,0.6874750000,rect,0.05916,0.02614\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"up|left,0.08228,0.6874750000,rect,0.05916,0.02614\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"down|right,0.37537,0.8174350000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"down|left,0.08228,0.8145650000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"right,0.33802,0.7463550000,rect,0.09698,0.03426\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down,0.22763,0.8002050000,rect,0.07436,0.04389\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"left,0.12049,0.7506650000,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.2273,0.8203050000,rect,0.07738,0.02251\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.07052,0.7499450000,rect,0.04504,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"right,0.39094,0.7477850000,rect,0.04504,0.03426\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"x,0.5518942748,0.7513998264,rect,0.0765792748,0.0352637546\"\noverlay0_desc19_exclusive = true\noverlay0_desc20 = \"l,0.6671529736,0.6999587546,rect,0.0765792748,0.0352637546\"\noverlay0_desc20_exclusive = true\noverlay0_desc21 = \"hold_fast_forward,0.49996,0.5876400000,radial,0.12967,0.02948\"\noverlay0_desc22 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc22_next_target = \"landscape\"\noverlay0_desc23 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc23_next_target = \"landscape\"\noverlay0_desc24 = \"select,0.86123,0.94331,radial,0.06535,0.01758\"\noverlay0_desc24_overlay = mode-white.png\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24149,0.6376400000,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.6369200000,rect,0.12338,0.03871\"\noverlay1_desc1_next_target = \"genesis_phone_portrait_grey\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7151800000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.8221600000,radial,0.07995,0.03543\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 14\noverlay2_desc0 = \"y,0.805995,0.92223,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-grey.png\noverlay2_desc0_exclusive = true\noverlay2_desc1 = \"b,0.88174,0.78234,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-grey.png\noverlay2_desc1_exclusive = true\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = mode-white.png\noverlay2_desc4 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc4_overlay = menu-white.png\noverlay2_desc4_next_target = \"phone_landscape_pause\"\noverlay2_desc5 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc5_overlay = \"d-pad white.png\"\noverlay2_desc5_range_mod_exclusive = true\noverlay2_desc6 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc6_next_target = \"genesis_phone_portrait_grey\"\noverlay2_desc7 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc8 = \"x,0.72344,0.81547,radial,0.04167,0.07407\"\noverlay2_desc8_overlay = y-grey.png\noverlay2_desc8_exclusive = true\noverlay2_desc9 = \"l,0.79395,0.66815,radial,0.04167,0.07407\"\noverlay2_desc9_overlay = x-grey.png\noverlay2_desc9_exclusive = true\noverlay2_desc10 = \"a,0.93994,0.62913,radial,0.04167,0.07407\"\noverlay2_desc10_overlay = c-grey.png\noverlay2_desc10_exclusive = true\noverlay2_desc11 = \"r,0.85719,0.51947,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = z-grey.png\noverlay2_desc11_exclusive = true\noverlay2_desc12 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc12_next_target = \"genesis_phone_portrait_grey\"\noverlay2_desc13 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc13_next_target = \"genesis_phone_portrait_grey\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.1012950000,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1233850000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1270650000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1233850000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9039450000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8781750000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8781750000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8781750000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "N64_Phone_Green",
        "path": "extra/Touch-Overlays/Phone/N64/n64_phone_green.cfg",
        "modes": [
            {
                "name": "N64_phone_portrait_green",
                "image": "extra/Touch-Overlays/Phone/N64/n64_phone_portrait_green.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/N64/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/N64/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"n64_phone_portrait_green\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = n64_phone_portrait_green.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 31\noverlay0_desc0 = \"overlay_next,0.49321,0.53201,radial,0.05094,0.01087\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"start,0.49888,0.75657,radial,0.04665,0.01946\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"l,0.14112,0.5156200000,rect,0.14827,0.02012\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 2.0\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"r,0.8539,0.5156200000,rect,0.13825,0.02012\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"dpad_area,0.2278,0.8541300000,rect,0.20741,0.09296\"\noverlay0_desc4_range_mod = 1.1\noverlay0_desc4_reach_x = 1.9\noverlay0_desc4_reach_y = 1.5\noverlay0_desc5 = \"up,0.22763,0.7825700000,rect,0.07436,0.01934\"\noverlay0_desc5_reach_x = 0\noverlay0_desc6 = \"up,0.22763,0.7940200000,rect,0.07436,0.04389\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up|right,0.35724,0.7868700000,rect,0.05916,0.02614\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"up|left,0.09531,0.7825700000,rect,0.05916,0.02614\"\noverlay0_desc8_reach_x = 0\noverlay0_desc9 = \"down|right,0.3644,0.8999400000,rect,0.05916,0.02614\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"down|left,0.10104,0.9042300000,rect,0.05916,0.02614\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"right,0.33802,0.8441200000,rect,0.09698,0.03426\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"down,0.22763,0.8970800000,rect,0.07436,0.04389\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"left,0.12049,0.8426900000,rect,0.09698,0.03426\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down,0.2273,0.9070900000,rect,0.07738,0.02251\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"left,0.08816,0.8441200000,rect,0.04504,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"right,0.39094,0.8412600000,rect,0.04504,0.03426\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"hold_fast_forward,0.49751,0.4812700000,radial,0.081,0.02661\"\noverlay0_desc18 = \"analog_left,0.22699,0.63509,radial,0.11392,0.05953\"\noverlay0_desc18_overlay = n64_phone_portrait_thumbstick.png\noverlay0_desc18_range_mod = 3.0\noverlay0_desc18_saturate_pct = 0.65\noverlay0_desc18_movable = true\noverlay0_desc18_range_mod_exclusive = true\noverlay0_desc19 = \"l2,0.79665,0.58355,radial,0.09245,0.04093\"\noverlay0_desc19_reach_x = 1.2\noverlay0_desc19_reach_y = 2.0\noverlay0_desc19_exclusive = true\noverlay0_desc20 = \"y|b,0.73817,0.67558,radial,0.02767,0.02767\"\noverlay0_desc21 = \"l2|b,0.84124,0.63877,radial,0.05000,0.01294\"\noverlay0_desc22 = \"l2|y,0.69399,0.61668,radial,0.02767,0.00926\"\noverlay0_desc23 = \"r_x_minus,0.61668,0.8462400000,radial,0.05712,0.02767\"\noverlay0_desc23_reach_x = 0\noverlay0_desc24 = \"r_x_plus,0.85597,0.8462400000,radial,0.05712,0.03135\"\noverlay0_desc24_reach_x = 0\noverlay0_desc25 = \"r_y_minus,0.73448,0.8977800000,radial,0.0608,0.02767\"\noverlay0_desc25_reach_x = 0\noverlay0_desc26 = \"r_y_plus,0.73448,0.7983800000,radial,0.06448,0.03135\"\noverlay0_desc26_reach_x = 0\noverlay0_desc27 = \"b,0.85229,0.69399,radial,0.09393,0.04239\"\noverlay0_desc27_reach_x = 1.2\noverlay0_desc27_reach_y = 2.0\noverlay0_desc27_exclusive = true\noverlay0_desc28 = \"y,0.62404,0.65718,radial,0.08657,0.04239\"\noverlay0_desc28_reach_x = 1.2\noverlay0_desc28_reach_y = 2.0\noverlay0_desc28_exclusive = true\noverlay0_desc29 = \"abxy_area,0.73448,0.8462400000,radial,0.18228,0.08289\"\noverlay0_desc29_down = r_y_minus\noverlay0_desc29_right = r_x_plus\noverlay0_desc29_up = r_y_plus\noverlay0_desc29_left = r_x_minus\noverlay0_desc29_exclusive = true\noverlay0_desc30 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc30_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24149,0.6376400000,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.6369200000,rect,0.12706,0.03503\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7151800000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.8221600000,radial,0.07995,0.03543\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 13\noverlay2_desc0 = \"b,0.93750,0.53569,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-n64-grey.png\noverlay2_desc0_exclusive = true\noverlay2_desc1 = \"y,0.84861,0.46943,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-n64-grey.png\noverlay2_desc1_exclusive = true\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc3_exclusive = true\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc4_exclusive = true\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_exclusive = true\noverlay2_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc8_next_target = \"n64_phone_portrait_green\"\noverlay2_desc9 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc10 = \"dpad_area,0.87437,0.80811,radial,0.11234,0.1786\"\noverlay2_desc10_overlay = c-pad-grey.png\noverlay2_desc10_range_mod_exclusive = true\noverlay2_desc10_down = r_y_minus\noverlay2_desc10_right = r_x_plus\noverlay2_desc10_up = r_y_plus\noverlay2_desc10_left = r_x_minus\noverlay2_desc11 = \"l2,0.92223,0.35531,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = z-n64-grey.png\noverlay2_desc12 = \"analog_left,0.11602,0.40316,radial,0.04976,0.07921\"\noverlay2_desc12_overlay = landscape_thumbstick.png\noverlay2_desc12_range_mod = 3.0\noverlay2_desc12_saturate_pct = 0.65\noverlay2_desc12_movable = true\noverlay2_desc12_range_mod_exclusive = true\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1253400000,0.2724750000,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1290200000,0.5596150000,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1253400000,0.8467650000,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8743700000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8743700000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8743700000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Nds_Phone_Black",
        "path": "extra/Touch-Overlays/Phone/NDS/nds_phone_black.cfg",
        "modes": [
            {
                "name": "Nds_phone_portrait_black",
                "image": "extra/Touch-Overlays/Phone/NDS/nds_phone_portrait_black.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/NDS/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/NDS/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"nds_phone_portrait_black\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = nds_phone_portrait_black.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.50323,0.95536,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc0_exclusive = true\noverlay0_desc1 = \"select,0.44324,0.7666850000,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.55668,0.7703650000,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.1661,0.7482750000,rect,0.15677,0.02012\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.84962,0.7482750000,rect,0.14241,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.23072,0.8722800000,rect,0.22143,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.1\noverlay0_desc5_reach_y = 1.1\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.22426,0.7954600000,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.23072,0.8062300000,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.70851,0.87805,rect,0.25507,0.10168\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.0\noverlay0_desc8_reach_y = 1.0\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc8_range_mod_exclusive = true\noverlay0_desc9 = \"a,0.83903,0.87738,rect,0.08448,0.03782\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.70784,0.93994,rect,0.08289,0.03782\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.35852,0.8119700000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.10436,0.8112500000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.35852,0.9282800000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.10651,0.9261300000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.34129,0.8651000000,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22713,0.9397700000,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12446,0.8658200000,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.22929,0.9483900000,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.07052,0.8665400000,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.8636600000,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.7038,0.81885,rect,0.08448,0.03782\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.56889,0.8794,rect,0.08448,0.03782\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.50000,0.7411350000,radial,0.06918,0.01748\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 12\noverlay1_desc0 = \"menu_toggle,0.23862,0.6357500000,rect,0.21205,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.8288,0.6364700000,rect,0.1618,0.02179\"\noverlay1_desc1_next_target = \"nds_phone_portrait_black\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.20488,0.8217100000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7132900000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20416,0.7147300000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8217100000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80295,0.7154500000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80582,0.8166800000,radial,0.07564,0.03543\"\noverlay1_desc8 = \"r2,0.2856406831,0.0755200000,rect,0.0997306831,0.05000\"\noverlay1_desc8_overlay = ds-changelayout.png\noverlay1_desc9 = \"l3,0.7157993169,0.0755200000,radial,0.0997306831,0.05000\"\noverlay1_desc9_overlay = ds-closelid.png\noverlay1_desc10 = \"l2,0.5000360026,0.0755200000,radial,0.0997306831,0.05000\"\noverlay1_desc10_overlay = ds-microphone.png\noverlay1_desc11 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc11_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 13\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-grey.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87069,0.91487,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-grey.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.87069,0.78602,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"nds_phone_portrait_black\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.80075,0.78602,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = y-grey.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.86701,0.66086,radial,0.04167,0.07407\"\noverlay2_desc12_overlay = x-grey.png\noverlay2_desc12_range_x = 0\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 12\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9076250000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8818550000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8818550000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8818550000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"r2,0.38476,0.87806,radial,0.05000,0.10498\"\noverlay3_desc8_overlay = ds-changelayout.png\noverlay3_desc9 = \"l2,0.50000,0.87806,rect,0.05000,0.10498\"\noverlay3_desc9_overlay = ds-microphone.png\noverlay3_desc10 = \"l3,0.61668,0.87806,radial,0.05000,0.10498\"\noverlay3_desc10_overlay = ds-closelid.png\noverlay3_desc11 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc11_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Nds_Phone_White",
        "path": "extra/Touch-Overlays/Phone/NDS/nds_phone_white.cfg",
        "modes": [
            {
                "name": "Nds_phone_portrait_white",
                "image": "extra/Touch-Overlays/Phone/NDS/nds_phone_portrait_white.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/NDS/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/NDS/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"nds_phone_portrait_white\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = nds_phone_portrait_white.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.50323,0.9538400000,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc0_exclusive = true\noverlay0_desc1 = \"select,0.44741,0.79665,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.55668,0.7953,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.21923,0.7551400000,rect,0.17472,0.02012\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.77926,0.7551400000,rect,0.17903,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2607250000,0.89151,rect,0.23287,0.10437\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.1\noverlay0_desc5_reach_y = 1.1\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.2607250000,0.8164400000,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.2635950000,0.8336700000,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.74013,0.88747,rect,0.23489,0.10706\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.0\noverlay0_desc8_reach_y = 1.0\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc8_range_mod_exclusive = true\noverlay0_desc9 = \"a,0.8693,0.89016,rect,0.08448,0.03782\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.72282,0.95138,rect,0.08448,0.03782\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.3960350000,0.8315200000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.1199950000,0.8279300000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.3960350000,0.9471100000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.1271750000,0.9478300000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.3619550000,0.8889500000,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.2628750000,0.9435200000,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.1451250000,0.8896700000,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2650250000,0.9629100000,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.0911850000,0.8911100000,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.4116050000,0.8903900000,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.73542,0.82759,rect,0.08448,0.03782\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.60558,0.88881,rect,0.08448,0.03782\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.50000,0.75493,radial,0.06918,0.02035\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 12\noverlay1_desc0 = \"menu_toggle,0.23862,0.6357500000,rect,0.21205,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.8288,0.6364700000,rect,0.1618,0.02179\"\noverlay1_desc1_next_target = \"nds_phone_portrait_white\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.20488,0.8217100000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7132900000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20416,0.7147300000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8217100000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80295,0.7154500000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80582,0.8166800000,radial,0.07564,0.03543\"\noverlay1_desc8 = \"r2,0.2856406831,0.0755200000,rect,0.0997306831,0.05000\"\noverlay1_desc8_overlay = ds-changelayout.png\noverlay1_desc9 = \"l3,0.7157993169,0.0755200000,radial,0.0997306831,0.05000\"\noverlay1_desc9_overlay = ds-closelid.png\noverlay1_desc10 = \"l2,0.5000360026,0.0755200000,radial,0.0997306831,0.05000\"\noverlay1_desc10_overlay = ds-microphone.png\noverlay1_desc11 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc11_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 13\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-grey.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87069,0.91487,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-grey.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.87069,0.78602,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"nds_phone_portrait_white\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.80075,0.78602,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = y-grey.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.86701,0.66086,radial,0.04167,0.07407\"\noverlay2_desc12_overlay = x-grey.png\noverlay2_desc12_range_x = 0\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 12\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9076250000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8818550000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8818550000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8818550000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"r2,0.38476,0.87806,radial,0.05000,0.10498\"\noverlay3_desc8_overlay = ds-changelayout.png\noverlay3_desc9 = \"l2,0.50000,0.87806,rect,0.05000,0.10498\"\noverlay3_desc9_overlay = ds-microphone.png\noverlay3_desc10 = \"l3,0.61668,0.87806,radial,0.05000,0.10498\"\noverlay3_desc10_overlay = ds-closelid.png\noverlay3_desc11 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc11_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Nds_Phone_White_Animated",
        "path": "extra/Touch-Overlays/Phone/NDS/nds_phone_white_animated.cfg",
        "modes": [
            {
                "name": "Nds_phone_portrait_white",
                "image": "extra/Touch-Overlays/Phone/NDS/nds_phone_portrait_animated_white.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/NDS/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/NDS/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"nds_phone_portrait_white\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = nds_phone_portrait_animated_white.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.50323,0.9519800000,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc0_exclusive = true\noverlay0_desc1 = \"select,0.44741,0.7807900000,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.55668,0.7772000000,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.2557319258,0.7549300000,rect,0.1507819258,0.02399\"\noverlay0_desc3_overlay = l-white-animated.png\noverlay0_desc3_alpha_mod = 0.001\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.7468680742,0.7549300000,rect,0.1507819258,0.02399\"\noverlay0_desc4_overlay = r-white-animated.png\noverlay0_desc4_alpha_mod = 0.001\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.24118,0.88612,rect,0.21201,0.10571\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.1\noverlay0_desc5_reach_y = 1.1\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.24006,0.8037700000,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.25574,0.83365,rect,0.06266,0.03135\"\noverlay0_desc7_overlay = dpad-up-white-animated.png\noverlay0_desc7_alpha_mod = 0.001\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.75341,0.89016,rect,0.22008,0.10571\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.0\noverlay0_desc8_reach_y = 1.0\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc8_range_mod_exclusive = true\noverlay0_desc9 = \"a,0.85989,0.88612,rect,0.06468,0.03171\"\noverlay0_desc9_overlay = a-white-animated.png\noverlay0_desc9_alpha_mod = 0.001\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.73542,0.94331,rect,0.06468,0.03171\"\noverlay0_desc10_overlay = b-white-animated.png\noverlay0_desc10_alpha_mod = 0.001\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.37537,0.8188500000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.09933,0.8152600000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.37537,0.9344400000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.10651,0.9351600000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.37348,0.89285,rect,0.06448,0.03104\"\noverlay0_desc15_overlay = dpad-right-white-animated.png\noverlay0_desc15_alpha_mod = 0.001\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.25507,0.94869,rect,0.06468,0.03104\"\noverlay0_desc16_overlay = dpad-down-white-animated.png\noverlay0_desc16_alpha_mod = 0.001\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.13599,0.89352,rect,0.05593,0.02969\"\noverlay0_desc17_overlay = dpad-left-white-animated.png\noverlay0_desc17_alpha_mod = 0.001\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.24436,0.9502400000,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.07052,0.8784400000,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.8777200000,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.7361,0.83028,rect,0.06468,0.03171\"\noverlay0_desc21_overlay = x-white-animated.png\noverlay0_desc21_alpha_mod = 0.001\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.61029,0.88612,rect,0.06468,0.03171\"\noverlay0_desc22_overlay = y-white-animated.png\noverlay0_desc22_alpha_mod = 0.001\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.5006375459,0.7568000000,radial,0.0636508031,0.02035\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 12\noverlay1_desc0 = \"menu_toggle,0.23862,0.6357500000,rect,0.21205,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.8288,0.6364700000,rect,0.1618,0.02179\"\noverlay1_desc1_next_target = \"nds_phone_portrait_white\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.20488,0.8217100000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7132900000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20416,0.7147300000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8217100000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80295,0.7154500000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80582,0.8166800000,radial,0.07564,0.03543\"\noverlay1_desc8 = \"r2,0.2856406831,0.0755200000,rect,0.0997306831,0.05000\"\noverlay1_desc8_overlay = ds-changelayout.png\noverlay1_desc9 = \"l3,0.7157993169,0.0755200000,radial,0.0997306831,0.05000\"\noverlay1_desc9_overlay = ds-closelid.png\noverlay1_desc10 = \"l2,0.5000360026,0.0755200000,radial,0.0997306831,0.05000\"\noverlay1_desc10_overlay = ds-microphone.png\noverlay1_desc11 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc11_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 13\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-grey.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87069,0.91487,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-grey.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.87069,0.78602,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"nds_phone_portrait_white\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.80075,0.78602,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = y-grey.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.86701,0.66086,radial,0.04167,0.07407\"\noverlay2_desc12_overlay = x-grey.png\noverlay2_desc12_range_x = 0\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 12\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9076250000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8818550000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8818550000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8818550000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"r2,0.38476,0.87806,radial,0.05000,0.10498\"\noverlay3_desc8_overlay = ds-changelayout.png\noverlay3_desc9 = \"l2,0.50000,0.87806,rect,0.05000,0.10498\"\noverlay3_desc9_overlay = ds-microphone.png\noverlay3_desc10 = \"l3,0.61668,0.87806,radial,0.05000,0.10498\"\noverlay3_desc10_overlay = ds-closelid.png\noverlay3_desc11 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc11_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Nes_Phone_Beige",
        "path": "extra/Touch-Overlays/Phone/NES/nes_phone_beige.cfg",
        "modes": [
            {
                "name": "Nes_phone_portrait_beige",
                "image": "extra/Touch-Overlays/Phone/NES/nes_phone_portrait_beige.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/NES/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/NES/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"nes_phone_portrait_beige\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = nes_phone_portrait_beige.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 22\noverlay0_desc0 = \"overlay_next,0.90256,0.68295,radial,0.03234,0.01267\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.39445,0.8964600000,radial,0.06669,0.0123\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.59027,0.8964600000,radial,0.0624,0.01132\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"dpad_area,0.24131,0.7740650000,rect,0.15972,0.081\"\noverlay0_desc3_range_mod = 1.1\noverlay0_desc3_reach_x = 1.9\noverlay0_desc3_reach_y = 1.5\noverlay0_desc3_range_mod_exclusive = true\noverlay0_desc4 = \"up,0.24131,0.7153750000,rect,0.07436,0.01934\"\noverlay0_desc4_reach_x = 0\noverlay0_desc5 = \"up,0.23844,0.7110850000,rect,0.07436,0.03091\"\noverlay0_desc5_reach_x = 0\noverlay0_desc6 = \"a,0.81525,0.7765770042,rect,0.07385,0.0371129958\"\noverlay0_desc6_reach_x = 1.2\noverlay0_desc6_reach_y = 2.0\noverlay0_desc6_exclusive = true\noverlay0_desc7 = \"b,0.61201,0.7735615732,rect,0.07957,0.0371129958\"\noverlay0_desc7_reach_x = 1.2\noverlay0_desc7_reach_y = 2.0\noverlay0_desc7_exclusive = true\noverlay0_desc8 = \"a|b,0.71506,0.7690384268,radial,0.02375,0.0401284268\"\noverlay0_desc8_reach_x = 0\noverlay0_desc9 = \"a|b,0.71649,0.7705461423,radial,0.02518,0.0356052803\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"up|right,0.3644,0.7139450000,rect,0.05916,0.02614\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|left,0.11392,0.7139450000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"down|right,0.35724,0.8198250000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|left,0.12537,0.8205450000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"right,0.36726,0.7712050000,rect,0.09245,0.03426\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"down,0.24989,0.84102,rect,0.07436,0.0352\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"left,0.12049,0.7697650000,rect,0.07814,0.03426\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"down,0.23844,0.83957,rect,0.07738,0.02251\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"left,0.10533,0.7697650000,rect,0.04504,0.03426\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"right,0.39094,0.7697650000,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"hold_fast_forward,0.50000,0.62773,radial,0.19195,0.02518\"\noverlay0_desc21 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc21_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24077,0.63877,rect,0.21134,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.85177,0.6387700000,rect,0.16756,0.02767\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19482,0.8247200000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7148700000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.202,0.7155900000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8232900000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80008,0.7155900000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80582,0.8197000000,radial,0.07851,0.03543\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 9\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc4_overlay = menu-white.png\noverlay2_desc4_next_target = \"phone_landscape_pause\"\noverlay2_desc5 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc5_overlay = \"d-pad white.png\"\noverlay2_desc5_range_mod_exclusive = true\noverlay2_desc6 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc6_down = b\noverlay2_desc6_right = a\noverlay2_desc6_range_mod_exclusive = true\noverlay2_desc7 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc7_next_target = \"nes_phone_portrait_beige\"\noverlay2_desc8 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1216600000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1253400000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1216600000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8706900000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8706900000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8706900000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Psp_Phone_White",
        "path": "extra/Touch-Overlays/Phone/PSP/psp_phone_white.cfg",
        "modes": [
            {
                "name": "Psp_phone_portrait_white",
                "image": "extra/Touch-Overlays/Phone/PSP/psp_phone_portrait_white.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/PSP/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/PSP/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"psp_phone_portrait_white\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = psp_phone_portrait_white.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 26\noverlay0_desc0 = \"overlay_next,0.49321,0.89278,radial,0.05094,0.01087\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.41955,0.7602500000,radial,0.05238,0.0123\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.57766,0.7602500000,radial,0.04665,0.01087\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.21537,0.5017550000,rect,0.20797,0.02012\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.78924,0.5003250000,rect,0.21403,0.02095\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.6434700000,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc6 = \"up,0.22763,0.5833500000,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22763,0.5948000000,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.73939,0.6387700000,rect,0.23415,0.09818\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.4\noverlay0_desc8_reach_y = 1.4\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc9 = \"a,0.88252,0.6430600000,rect,0.08448,0.03782\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.73939,0.6988800000,rect,0.08448,0.03782\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.35724,0.5876500000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.09531,0.5833500000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.3644,0.7007200000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.10104,0.7050100000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.33802,0.6449000000,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22763,0.6978600000,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12049,0.6434700000,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2273,0.7078700000,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.08816,0.6449000000,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.6420400000,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.73367,0.5815200000,rect,0.08448,0.03782\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.58768,0.6416300000,rect,0.08448,0.03782\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.49751,0.4740950000,radial,0.05712,0.04239\"\noverlay0_desc24 = \"analog_left,0.24565,0.85248,radial,0.07814,0.03949\"\noverlay0_desc24_overlay = psp-thumbstick.png\noverlay0_desc24_range_mod = 3.0\noverlay0_desc24_saturate_pct = 0.65\noverlay0_desc24_movable = true\noverlay0_desc24_range_mod_exclusive = true\noverlay0_desc25 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc25_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24149,0.6376400000,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.6369200000,rect,0.13811,0.03503\"\noverlay1_desc1_next_target = \"psp_phone_portrait_white\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7151800000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.8221600000,radial,0.07995,0.03543\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 20\noverlay2_desc0 = \"a,0.95536,0.78602,radial,0.03135,0.05344\"\noverlay2_desc0_overlay = circle35.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.8891,0.89278,radial,0.03135,0.05344\"\noverlay2_desc1_overlay = cross-35.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.77722,0.94064,rect,0.02399,0.03503\"\noverlay2_desc2_overlay = start35.png\noverlay2_desc2_exclusive = true\noverlay2_desc3 = \"select,0.22278,0.94064,rect,0.02399,0.03503\"\noverlay2_desc3_overlay = select35.png\noverlay2_desc3_exclusive = true\noverlay2_desc4 = \"l,0.04239,0.06448,rect,0.03135,0.03503\"\noverlay2_desc4_overlay = L135.png\noverlay2_desc5 = \"r,0.95761,0.06448,rect,0.03135,0.03503\"\noverlay2_desc5_overlay = r135.png\noverlay2_desc6 = \"overlay_next,0.19701,0.05712,radial,0.01662,0.02767\"\noverlay2_desc6_overlay = menu35.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.09761,0.79339,radial,0.07921,0.13074\"\noverlay2_desc7_overlay = dpad35.png\noverlay2_desc7_exclusive = true\noverlay2_desc7_reach_x = 1.9\noverlay2_desc7_reach_y = 1.9\noverlay2_desc8 = \"abxy_area,0.88174,0.77866,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"psp_phone_portrait_white\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.82284,0.78602,radial,0.03135,0.05344\"\noverlay2_desc11_overlay = square35.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.8891,0.68663,radial,0.03135,0.05344\"\noverlay2_desc12_overlay = triangle35.png\noverlay2_desc12_range_x = 0\noverlay2_desc13 = \"l2,0.11602,0.07184,radial,0.03135,0.04239\"\noverlay2_desc13_overlay = l235.png\noverlay2_desc14 = \"r2,0.88398,0.07184,radial,0.03135,0.04239\"\noverlay2_desc14_overlay = r235.png\noverlay2_desc15 = \"analog_left,0.09761,0.40316,radial,0.03503,0.05712\"\noverlay2_desc15_overlay = l35.png\noverlay2_desc15_range_mod = 7.0\noverlay2_desc15_saturate_pct = 0.65\noverlay2_desc15_movable = true\noverlay2_desc15_range_mod_exclusive = true\noverlay2_desc16 = \"analog_right,0.90239,0.40316,radial,0.03503,0.05712\"\noverlay2_desc16_overlay = r35.png\noverlay2_desc16_range_mod = 7.0\noverlay2_desc16_saturate_pct = 0.65\noverlay2_desc16_movable = true\noverlay2_desc16_range_mod_exclusive = true\noverlay2_desc17 = \"l3,0.03503,0.17492,radial,0.02767,0.04607\"\noverlay2_desc17_overlay = l335.png\noverlay2_desc18 = \"r3,0.96497,0.17492,radial,0.02767,0.04607\"\noverlay2_desc18_overlay = r335.png\noverlay2_desc19 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc19_next_target = \"psp_phone_portrait_white\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.0976050000,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1196950000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1233750000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1196950000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9002650000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8744950000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8744950000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8744950000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Psx_Phone_Beige",
        "path": "extra/Touch-Overlays/Phone/PSX/psx_phone_beige.cfg",
        "modes": [
            {
                "name": "Psx_phone_portrait_beige",
                "image": "extra/Touch-Overlays/Phone/PSX/psx_phone_portrait_beige.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/PSX/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/PSX/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"psx_phone_portrait_beige\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = psx_phone_portrait_beige.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 31\noverlay0_desc0 = \"overlay_next,0.49321,0.89278,radial,0.05094,0.01087\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.41955,0.7602500000,radial,0.05238,0.0123\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.57766,0.7602500000,radial,0.04665,0.01087\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.10866,0.5017550000,rect,0.10498,0.02012\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.89278,0.5003250000,rect,0.10498,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.6434700000,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc6 = \"up,0.22763,0.5833500000,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22763,0.5948000000,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.73939,0.6387700000,rect,0.23415,0.09818\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.4\noverlay0_desc8_reach_y = 1.4\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc9 = \"a,0.88252,0.6430600000,rect,0.08448,0.03782\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.73939,0.6988800000,rect,0.08448,0.03782\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.35724,0.5876500000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.09531,0.5833500000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.3644,0.7007200000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.10104,0.7050100000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.33802,0.6449000000,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22763,0.6978600000,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12049,0.6434700000,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2273,0.7078700000,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.08816,0.6449000000,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.6420400000,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.73367,0.5815200000,rect,0.08448,0.03782\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.58768,0.6416300000,rect,0.08448,0.03782\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.49751,0.4740950000,radial,0.05712,0.04239\"\noverlay0_desc24 = \"l2,0.32217,0.4998650000,radial,0.10866,0.01803\"\noverlay0_desc24_reach_x = 1.2\noverlay0_desc24_reach_y = 2.0\noverlay0_desc24_exclusive = true\noverlay0_desc25 = \"r2,0.67926,0.4988950000,radial,0.10498,0.01946\"\noverlay0_desc25_reach_x = 1.2\noverlay0_desc25_reach_y = 2.0\noverlay0_desc25_exclusive = true\noverlay0_desc26 = \"l3,0.25223,0.97377,radial,0.14179,0.0203\"\noverlay0_desc27 = \"r3,0.74798,0.97377,radial,0.13811,0.0203\"\noverlay0_desc28 = \"analog_left,0.24417,0.8486100000,radial,0.07814,0.03949\"\noverlay0_desc28_overlay = psx_phone_portrait_analog.png\noverlay0_desc28_range_mod = 3.0\noverlay0_desc28_saturate_pct = 0.65\noverlay0_desc28_movable = true\noverlay0_desc28_range_mod_exclusive = true\noverlay0_desc29 = \"analog_right,0.74369,0.8486100000,radial,0.07814,0.03949\"\noverlay0_desc29_overlay = psx_phone_portrait_analog.png\noverlay0_desc29_range_mod = 3.0\noverlay0_desc29_saturate_pct = 0.65\noverlay0_desc29_movable = true\noverlay0_desc29_range_mod_exclusive = true\noverlay0_desc30 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc30_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24149,0.6376400000,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.6369200000,rect,0.13811,0.03503\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7151800000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.8221600000,radial,0.07995,0.03543\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 19\noverlay2_desc0 = \"a,0.95536,0.78602,radial,0.03135,0.05344\"\noverlay2_desc0_overlay = circle35.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.8891,0.89278,radial,0.03135,0.05344\"\noverlay2_desc1_overlay = cross-35.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.77722,0.94064,rect,0.02399,0.03503\"\noverlay2_desc2_overlay = start35.png\noverlay2_desc2_exclusive = true\noverlay2_desc3 = \"select,0.22278,0.94064,rect,0.02399,0.03503\"\noverlay2_desc3_overlay = select35.png\noverlay2_desc3_exclusive = true\noverlay2_desc4 = \"l,0.04239,0.06448,rect,0.03135,0.03503\"\noverlay2_desc4_overlay = L135.png\noverlay2_desc5 = \"r,0.95761,0.06448,rect,0.03135,0.03503\"\noverlay2_desc5_overlay = r135.png\noverlay2_desc6 = \"overlay_next,0.19701,0.05712,radial,0.01662,0.02767\"\noverlay2_desc6_overlay = menu35.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.09761,0.79339,radial,0.07921,0.13074\"\noverlay2_desc7_overlay = dpad35.png\noverlay2_desc7_exclusive = true\noverlay2_desc7_reach_x = 1.9\noverlay2_desc7_reach_y = 1.9\noverlay2_desc8 = \"abxy_area,0.88174,0.77866,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"psx_phone_portrait_beige\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.82284,0.78602,radial,0.03135,0.05344\"\noverlay2_desc11_overlay = square35.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.8891,0.68663,radial,0.03135,0.05344\"\noverlay2_desc12_overlay = triangle35.png\noverlay2_desc12_range_x = 0\noverlay2_desc13 = \"l2,0.11602,0.07184,radial,0.03135,0.04239\"\noverlay2_desc13_overlay = l235.png\noverlay2_desc14 = \"r2,0.88398,0.07184,radial,0.03135,0.04239\"\noverlay2_desc14_overlay = r235.png\noverlay2_desc15 = \"analog_left,0.09761,0.40316,radial,0.03503,0.05712\"\noverlay2_desc15_overlay = l35.png\noverlay2_desc15_range_mod = 7.0\noverlay2_desc15_saturate_pct = 0.65\noverlay2_desc15_movable = true\noverlay2_desc15_range_mod_exclusive = true\noverlay2_desc16 = \"analog_right,0.90239,0.40316,radial,0.03503,0.05712\"\noverlay2_desc16_overlay = r35.png\noverlay2_desc16_range_mod = 7.0\noverlay2_desc16_saturate_pct = 0.65\noverlay2_desc16_movable = true\noverlay2_desc16_range_mod_exclusive = true\noverlay2_desc17 = \"l3,0.03503,0.17492,radial,0.02767,0.04607\"\noverlay2_desc17_overlay = l335.png\noverlay2_desc18 = \"r3,0.96497,0.17492,radial,0.02767,0.04607\"\noverlay2_desc18_overlay = r335.png\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.0976050000,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1196950000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1233750000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1196950000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9002650000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8744950000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8744950000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8744950000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Psx_Phone_Transparent",
        "path": "extra/Touch-Overlays/Phone/PSX/psx_phone_transparent.cfg",
        "modes": [
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/PSX/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/PSX/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"psx_phone_portrait_transparent\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 31\noverlay0_desc0 = \"overlay_next,0.49321,0.89278,radial,0.05094,0.01087\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.41955,0.7602500000,radial,0.05238,0.0236400000\"\noverlay0_desc1_overlay = select35.png\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.57766,0.7602500000,radial,0.04665,0.0208916098\"\noverlay0_desc2_overlay = start35.png\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.09091,0.49861,rect,0.0700711533,0.02012\"\noverlay0_desc3_overlay = L135.png\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.9203792500,0.5003250000,rect,0.0700711533,0.02012\"\noverlay0_desc4_overlay = r135.png\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.22614,0.6434700000,rect,0.15954,0.0788\"\noverlay0_desc5_overlay = dpad35.png\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc6 = \"up,0.22763,0.5833500000,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22763,0.5948000000,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.7393829301,0.6387700000,rect,0.2325270699,0.09818\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.4\noverlay0_desc8_reach_y = 1.4\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc9 = \"a,0.88007,0.6430600000,rect,0.0714,0.03782\"\noverlay0_desc9_overlay = circle35.png\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.7393829301,0.70986,rect,0.0714,0.03782\"\noverlay0_desc10_overlay = cross-35.png\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.35724,0.5876500000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.09531,0.5833500000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.3644,0.7007200000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.10104,0.7050100000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.33802,0.6449000000,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22763,0.6978600000,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12049,0.6434700000,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2273,0.7078700000,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.08816,0.6449000000,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.6420400000,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.7393829301,0.5815200000,rect,0.0714,0.03782\"\noverlay0_desc21_overlay = triangle35.png\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.59616,0.6416300000,rect,0.0714,0.03782\"\noverlay0_desc22_overlay = square35.png\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.4985774153,0.4740950000,radial,0.08553,0.04239\"\noverlay0_desc24 = \"l2,0.25103,0.501755,radial,0.0725274450,0.02364\"\noverlay0_desc24_overlay = l235.png\noverlay0_desc24_reach_x = 1.2\noverlay0_desc24_reach_y = 2.0\noverlay0_desc24_exclusive = true\noverlay0_desc25 = \"r2,0.74897,0.501755,radial,0.072527445,0.02364\"\noverlay0_desc25_overlay = r235.png\noverlay0_desc25_reach_x = 1.2\noverlay0_desc25_reach_y = 2.0\noverlay0_desc25_exclusive = true\noverlay0_desc26 = \"l3,0.3799816880,0.9567600000,radial,0.0681666880,0.0310400000\"\noverlay0_desc26_overlay = l335.png\noverlay0_desc27 = \"r3,0.6183175020,0.9567600000,radial,0.0663974980,0.0310400000\"\noverlay0_desc27_overlay = r335.png\noverlay0_desc28 = \"analog_left,0.24417,0.8486100000,radial,0.07814,0.03949\"\noverlay0_desc28_overlay = l35.png\noverlay0_desc28_range_mod = 3.0\noverlay0_desc28_saturate_pct = 0.65\noverlay0_desc28_movable = true\noverlay0_desc28_range_mod_exclusive = true\noverlay0_desc29 = \"analog_right,0.74369,0.8486100000,radial,0.07814,0.03949\"\noverlay0_desc29_overlay = r35.png\noverlay0_desc29_range_mod = 3.0\noverlay0_desc29_saturate_pct = 0.65\noverlay0_desc29_movable = true\noverlay0_desc29_range_mod_exclusive = true\noverlay0_desc30 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc30_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24149,0.6376400000,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.6369200000,rect,0.13811,0.03503\"\noverlay1_desc1_next_target = \"psx_phone_portrait_transparent\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7151800000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.8221600000,radial,0.07995,0.03543\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 20\noverlay2_desc0 = \"a,0.95536,0.78602,radial,0.03135,0.05344\"\noverlay2_desc0_overlay = circle35.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.8891,0.89278,radial,0.03135,0.05344\"\noverlay2_desc1_overlay = cross-35.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.77722,0.94064,rect,0.02399,0.03503\"\noverlay2_desc2_overlay = start35.png\noverlay2_desc2_exclusive = true\noverlay2_desc3 = \"select,0.22278,0.94064,rect,0.02399,0.03503\"\noverlay2_desc3_overlay = select35.png\noverlay2_desc3_exclusive = true\noverlay2_desc4 = \"l,0.04239,0.06448,rect,0.03135,0.03503\"\noverlay2_desc4_overlay = L135.png\noverlay2_desc5 = \"r,0.95761,0.06448,rect,0.03135,0.03503\"\noverlay2_desc5_overlay = r135.png\noverlay2_desc6 = \"overlay_next,0.19701,0.05712,radial,0.01662,0.02767\"\noverlay2_desc6_overlay = menu35.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.09761,0.79339,radial,0.07921,0.13074\"\noverlay2_desc7_overlay = dpad35.png\noverlay2_desc7_exclusive = true\noverlay2_desc7_reach_x = 1.9\noverlay2_desc7_reach_y = 1.9\noverlay2_desc8 = \"abxy_area,0.88174,0.77866,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"psx_phone_portrait_transparent\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.82284,0.78602,radial,0.03135,0.05344\"\noverlay2_desc11_overlay = square35.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.8891,0.68663,radial,0.03135,0.05344\"\noverlay2_desc12_overlay = triangle35.png\noverlay2_desc12_range_x = 0\noverlay2_desc13 = \"l2,0.11602,0.07184,radial,0.03135,0.04239\"\noverlay2_desc13_overlay = l235.png\noverlay2_desc14 = \"r2,0.88398,0.07184,radial,0.03135,0.04239\"\noverlay2_desc14_overlay = r235.png\noverlay2_desc15 = \"analog_left,0.09761,0.40316,radial,0.03503,0.05712\"\noverlay2_desc15_overlay = l35.png\noverlay2_desc15_range_mod = 7.0\noverlay2_desc15_saturate_pct = 0.65\noverlay2_desc15_movable = true\noverlay2_desc15_range_mod_exclusive = true\noverlay2_desc16 = \"analog_right,0.90239,0.40316,radial,0.03503,0.05712\"\noverlay2_desc16_overlay = r35.png\noverlay2_desc16_range_mod = 7.0\noverlay2_desc16_saturate_pct = 0.65\noverlay2_desc16_movable = true\noverlay2_desc16_range_mod_exclusive = true\noverlay2_desc17 = \"l3,0.03503,0.17492,radial,0.02767,0.04607\"\noverlay2_desc17_overlay = l335.png\noverlay2_desc18 = \"r3,0.96497,0.17492,radial,0.02767,0.04607\"\noverlay2_desc18_overlay = r335.png\noverlay2_desc19 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc19_next_target = \"psx_phone_portrait_transparent\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.0976050000,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1196950000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1233750000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1196950000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9002650000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8744950000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8744950000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8744950000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Saturn_Black",
        "path": "extra/Touch-Overlays/Phone/SATURN/saturn_black.cfg",
        "modes": [
            {
                "name": "Saturn_phone_portrait_black",
                "image": "extra/Touch-Overlays/Phone/SATURN/saturn_portrait_black.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/SATURN/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/SATURN/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Portrait-stick",
                "image": "extra/Touch-Overlays/Phone/SATURN/saturn_portrait_black_stick.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 5\noverlay0_name = \"saturn_phone_portrait_black\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = saturn_portrait_black.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 28\noverlay0_desc0 = \"overlay_next,0.1571800000,0.9389300000,radial,0.06535,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"start,0.4720400000,0.9409500000,radial,0.06871,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"l,0.81414,0.6721881250,rect,0.0630885740,0.02835\"\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"r,0.89756,0.7334168750,rect,0.0649994900,0.0344\"\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"dpad_area,0.2278,0.7735350000,rect,0.20741,0.09296\"\noverlay0_desc4_range_mod = 1.1\noverlay0_desc4_reach_x = 1.9\noverlay0_desc4_reach_y = 1.5\noverlay0_desc4_range_mod_exclusive = true\noverlay0_desc5 = \"up,0.22763,0.7046050000,rect,0.07436,0.01934\"\noverlay0_desc5_reach_x = 0\noverlay0_desc6 = \"up,0.22763,0.7268650000,rect,0.07436,0.04389\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"b,0.6357055360,0.8280781204,rect,0.0724438043,0.0352637546\"\noverlay0_desc7_exclusive = true\noverlay0_desc8 = \"a,0.7623321718,0.7816627397,rect,0.0724438043,0.0352637546\"\noverlay0_desc8_exclusive = true\noverlay0_desc9 = \"up|right,0.37537,0.7103450000,rect,0.05916,0.02614\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"up|left,0.08228,0.7103450000,rect,0.05916,0.02614\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"down|right,0.37537,0.8403050000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"down|left,0.08228,0.8374350000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"right,0.33802,0.7692250000,rect,0.09698,0.03426\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down,0.22763,0.8230750000,rect,0.07436,0.04389\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"left,0.12049,0.7735350000,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.2273,0.8431750000,rect,0.07738,0.02251\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.07052,0.7728150000,rect,0.04504,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"right,0.39094,0.7706550000,rect,0.04504,0.03426\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"y,0.54839,0.7677143750,rect,0.0724438043,0.0352637546\"\noverlay0_desc19_exclusive = true\noverlay0_desc20 = \"x,0.67958,0.7114056296,rect,0.0724438043,0.0352637546\"\noverlay0_desc20_exclusive = true\noverlay0_desc21 = \"hold_fast_forward,0.49996,0.5435800000,radial,0.12967,0.02948\"\noverlay0_desc22 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc22_next_target = \"landscape\"\noverlay0_desc23 = \"l2,0.16963,0.5657800000,radial,0.11715,0.02902\"\noverlay0_desc23_exclusive = true\noverlay0_desc24 = \"r2,0.8397,0.5637600000,radial,0.11648,0.02229\"\noverlay0_desc24_exclusive = true\noverlay0_desc25 = \"select,0.89352,0.90765,radial,0.04987,0.01489\"\noverlay0_desc25_overlay = mode-white.png\noverlay0_desc26 = \"overlay_next,0.89151,0.96147,radial,0.07611,0.01489\"\noverlay0_desc26_overlay = analog-white.png\noverlay0_desc26_next_target = \"portrait-stick\"\noverlay0_desc27 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc27_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24149,0.6376400000,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.6369200000,rect,0.12338,0.03871\"\noverlay1_desc1_next_target = \"saturn_phone_portrait_black\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7151800000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.8221600000,radial,0.07995,0.03543\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 16\noverlay2_desc0 = \"a,0.88174,0.78234,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = b-grey.png\noverlay2_desc1 = \"b,0.805995,0.92223,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = a-grey.png\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = mode-white.png\noverlay2_desc4 = \"l2,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r2,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_exclusive = true\noverlay2_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc8_next_target = \"saturn_phone_portrait_black\"\noverlay2_desc9 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc10 = \"y,0.72344,0.81547,radial,0.04167,0.07407\"\noverlay2_desc10_overlay = x-grey.png\noverlay2_desc10_range_x = 0\noverlay2_desc11 = \"x,0.79395,0.66815,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = y-grey.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"analog_left,0.12051,0.38424,radial,0.05122,0.07611\"\noverlay2_desc12_overlay = landscape_thumbstick.png\noverlay2_desc12_range_mod = 3.0\noverlay2_desc12_saturate_pct = 0.65\noverlay2_desc12_movable = true\noverlay2_desc12_range_mod_exclusive = true\noverlay2_desc13 = \"l,0.85719,0.51947,radial,0.04167,0.07407\"\noverlay2_desc13_overlay = z-grey.png\noverlay2_desc14 = \"r,0.93994,0.62913,radial,0.04167,0.07407\"\noverlay2_desc14_overlay = c-grey.png\noverlay2_desc15 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc15_next_target = \"saturn_phone_portrait_black\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.1012950000,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1233850000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1270650000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1233850000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9039450000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8781750000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8781750000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8781750000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\"\noverlay4_name = \"portrait-stick\"\noverlay4_full_screen = true\noverlay4_normalized = true\noverlay4_aspect_ratio = 0.56236559139784946237\noverlay4_block_x_separation = false\noverlay4_block_y_separation = true\noverlay4_range_mod = 1.5\noverlay4_alpha_mod = 2.0\noverlay4_overlay = saturn_portrait_black_stick.png\noverlay4_descs = 16\noverlay4_desc0 = \"overlay_next,0.1571800000,0.9369200000,radial,0.06535,0.0145\"\noverlay4_desc0_next_target = \"phone_portrait_pause\"\noverlay4_desc0_reach_x = 1.6\noverlay4_desc0_reach_y = 1.6\noverlay4_desc1 = \"start,0.4720400000,0.9389400000,radial,0.06871,0.0145\"\noverlay4_desc1_reach_x = 1.2\noverlay4_desc1_reach_y = 1.6\noverlay4_desc1_exclusive = true\noverlay4_desc2 = \"l,0.81414,0.66747,rect,0.0630885740,0.02835\"\noverlay4_desc2_exclusive = true\noverlay4_desc3 = \"r,0.89756,0.7330768750,rect,0.0649994900,0.0344\"\noverlay4_desc3_exclusive = true\noverlay4_desc4 = \"analog_left,0.2278,0.7795950000,radial,0.11715,0.06266\"\noverlay4_desc4_overlay = portrait_thumbstick.png\noverlay4_desc4_range_mod = 3.0\noverlay4_desc4_saturate_pct = 0.65\noverlay4_desc4_movable = true\noverlay4_desc4_range_mod_exclusive = true\noverlay4_desc5 = \"b,0.6357055360,0.8277381204,rect,0.0724438043,0.0352637546\"\noverlay4_desc5_exclusive = true\noverlay4_desc6 = \"a,0.7623321718,0.7813227397,rect,0.0724438043,0.0352637546\"\noverlay4_desc6_exclusive = true\noverlay4_desc7 = \"y,0.54839,0.7673743750,rect,0.0724438043,0.0352637546\"\noverlay4_desc7_exclusive = true\noverlay4_desc8 = \"x,0.67958,0.7110656296,rect,0.0724438043,0.0352637546\"\noverlay4_desc8_exclusive = true\noverlay4_desc9 = \"hold_fast_forward,0.49996,0.5456000000,radial,0.12967,0.02948\"\noverlay4_desc10 = \"overlay_next,-1,-1,radial,0,0\"\noverlay4_desc10_next_target = \"landscape\"\noverlay4_desc11 = \"l2,0.16963,0.5678000000,radial,0.11715,0.02902\"\noverlay4_desc11_exclusive = true\noverlay4_desc12 = \"r2,0.8397,0.5657800000,radial,0.11648,0.02229\"\noverlay4_desc12_exclusive = true\noverlay4_desc13 = \"select,0.89352,0.90765,radial,0.04987,0.01489\"\noverlay4_desc13_overlay = mode-white.png\noverlay4_desc14 = \"overlay_next,0.89151,0.96147,radial,0.07611,0.01489\"\noverlay4_desc14_overlay = analog-white.png\noverlay4_desc14_next_target = \"saturn_phone_portrait_black\"\noverlay4_desc15 = \"overlay_next,-1,-1,radial,0,0\"\noverlay4_desc15_next_target = \"landscape\""
    },
    {
        "name": "Snes_Phone_Purple",
        "path": "extra/Touch-Overlays/Phone/SNES/snes_phone_purple.cfg",
        "modes": [
            {
                "name": "Snes_phone_portrait_purple",
                "image": "extra/Touch-Overlays/Phone/SNES/snes_phone_portrait_purple.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone/SNES/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone/SNES/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"snes_phone_portrait_purple\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = snes_phone_portrait_purple.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.05691,0.9052650000,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.41955,0.9023950000,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.58285,0.9038250000,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.15144,0.6035400000,rect,0.15296,0.02012\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.84719,0.6035400000,rect,0.15296,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.7636950000,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.22763,0.6947650000,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22763,0.7170250000,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.71857,0.7639300000,rect,0.24118,0.10866\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.0\noverlay0_desc8_reach_y = 1.2\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc8_exclusive = true\noverlay0_desc9 = \"a,0.86066,0.7639300000,rect,0.08448,0.03782\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.72282,0.8296700000,rect,0.08448,0.03782\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.37537,0.7005050000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.08228,0.7005050000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.37537,0.8304650000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.08228,0.8275950000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.33802,0.7593850000,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22763,0.8132350000,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12049,0.7636950000,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2273,0.8333350000,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.07052,0.7629750000,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.7608150000,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.71539,0.7003100000,rect,0.08448,0.03782\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.57649,0.7649900000,rect,0.08448,0.03782\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.49996,0.5876400000,radial,0.12967,0.02948\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24149,0.6376400000,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.6369200000,rect,0.12338,0.03871\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7151800000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8221600000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.7144600000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.8221600000,radial,0.07995,0.03543\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 13\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-grey.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87069,0.91487,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-grey.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.87069,0.78602,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"snes_phone_portrait_purple\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.80075,0.78602,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = y-grey.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.86701,0.66086,radial,0.04167,0.07407\"\noverlay2_desc12_overlay = x-grey.png\noverlay2_desc12_range_x = 0\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.1012950000,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1233850000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1270650000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1233850000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9039450000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8781750000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8781750000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8781750000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Gb_Portrait_Beige",
        "path": "extra/Touch-Overlays/Phone-Taller/GB/gb_portrait_beige.cfg",
        "modes": [
            {
                "name": "Gb_phone_portrait_beige",
                "image": "extra/Touch-Overlays/Phone-Taller/GB/gb_portrait_beige.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GB/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GB/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"gb_phone_portrait_beige\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = gb_portrait_beige.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 23\noverlay0_desc0 = \"overlay_next,0.0870652691,0.9362297616,radial,0.0760252691,0.0320802384\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.40684,0.9269120600,radial,0.0718356671,0.0286620600\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.59827,0.9362297616,radial,0.0718356671,0.0286620600\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"dpad_area,0.2371150000,0.7601900000,rect,0.20741,0.08959\"\noverlay0_desc3_range_mod = 1.1\noverlay0_desc3_reach_x = 1.9\noverlay0_desc3_reach_y = 1.5\noverlay0_desc3_range_mod_exclusive = true\noverlay0_desc4 = \"up,0.2369450000,0.6927800000,rect,0.07436,0.01934\"\noverlay0_desc4_reach_x = 0\noverlay0_desc5 = \"up,0.2398450000,0.6931700000,rect,0.06604,0.02693\"\noverlay0_desc5_alpha_mod = 0.001\noverlay0_desc5_reach_x = 0\noverlay0_desc6 = \"abxy_area,0.75226,0.7271200000,rect,0.20503,0.08243\"\noverlay0_desc6_range_mod = 1.1\noverlay0_desc6_reach_x = 1.4\noverlay0_desc6_reach_y = 1.4\noverlay0_desc6_range_mod_exclusive = true\noverlay0_desc7 = \"a,0.83958,0.73448,rect,0.09388,0.04607\"\noverlay0_desc7_alpha_mod = 0.001\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"b,0.65009,0.7713,rect,0.09675,0.04379\"\noverlay0_desc8_alpha_mod = 0.001\noverlay0_desc8_reach_x = 0\noverlay0_desc9 = \"a|b,0.74365,0.7242600000,radial,0.03997,0.02032\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"a|b,0.76945,0.7528800000,radial,0.03997,0.02032\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.3765750000,0.7015100000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.0989050000,0.7015100000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.3722850000,0.8217300000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.1060650000,0.8203000000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.3625550000,0.7612800000,rect,0.05806,0.03503\"\noverlay0_desc15_alpha_mod = 0.001\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.2369450000,0.8250100000,rect,0.06517,0.02782\"\noverlay0_desc16_alpha_mod = 0.001\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.1135950000,0.7612800000,rect,0.06248,0.03503\"\noverlay0_desc17_alpha_mod = 0.001\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2366150000,0.8317500000,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.0798350000,0.7601900000,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.4002550000,0.7601900000,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"hold_fast_forward,0.50000,0.60932,radial,0.19195,0.02804\"\noverlay0_desc22 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc22_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24077,0.6599450000,rect,0.21134,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.85177,0.6562650000,rect,0.13811,0.03871\"\noverlay1_desc1_next_target = \"gb_phone_portrait_beige\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19482,0.8550550000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7335650000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.202,0.7372550000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8513750000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80008,0.7409350000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80075,0.8513750000,radial,0.07184,0.03503\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 11\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc4_overlay = menu-white.png\noverlay2_desc4_next_target = \"phone_landscape_pause\"\noverlay2_desc5 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc5_overlay = \"d-pad white.png\"\noverlay2_desc5_range_mod_exclusive = true\noverlay2_desc6 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc6_down = b\noverlay2_desc6_right = a\noverlay2_desc6_range_mod_exclusive = true\noverlay2_desc7 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc7_next_target = \"gb_phone_portrait_beige\"\noverlay2_desc8 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"gb_phone_portrait_beige\"\noverlay2_desc10 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc10_next_target = \"gb_phone_portrait_beige\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.0885750000,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1106650000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1143450000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1106650000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9205150000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8947450000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8947450000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8947450000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Gba_Phone_Red",
        "path": "extra/Touch-Overlays/Phone-Taller/GBA/gba_phone_red.cfg",
        "modes": [
            {
                "name": "Gba_phone_portrait_red",
                "image": "extra/Touch-Overlays/Phone-Taller/GBA/gba_phone_portrait_red.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GBA/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GBA/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"gba_phone_portrait_red\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = gba_phone_portrait_red.png\naspect_ratio = 0.56236559139784946237\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.07098,0.89111,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.40447,0.89254,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.58285,0.89254,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.14827,0.63348,rect,0.1497,0.01803\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.84719,0.63507,rect,0.15296,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.76945,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.22763,0.7169,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22556,0.72756,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.75226,0.77518,rect,0.20503,0.0891\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.4\noverlay0_desc8_reach_y = 1.4\noverlay0_desc8_range_mod_exclusive = true\noverlay0_desc9 = \"a,0.84245,0.73761,rect,0.10089,0.04587\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.6435,0.81239,rect,0.09245,0.04379\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"a|b,0.74365,0.78523,radial,0.03997,0.02032\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"a|b,0.75886,0.77518,radial,0.03997,0.02032\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"up|right,0.36583,0.7122,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"up|left,0.09388,0.7122,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"down|right,0.36583,0.83386,rect,0.05916,0.02614\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down|left,0.10104,0.83243,rect,0.05916,0.02614\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"right,0.33802,0.77231,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.22763,0.83482,rect,0.07436,0.04389\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.12049,0.77088,rect,0.09698,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"down,0.2273,0.83741,rect,0.07738,0.02251\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"left,0.07349,0.77136,rect,0.04504,0.03426\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"right,0.40232,0.77064,rect,0.04504,0.03426\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.50000,0.61487,radial,0.14385,0.03949\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 8\noverlay1_desc0 = \"menu_toggle,0.23862,0.6572,rect,0.21277,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84818,0.65864,rect,0.11585,0.01238\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.1977,0.84388,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50284,0.73546,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20631,0.73618,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84316,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80295,0.73618,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80941,0.84459,rect,0.08641,0.04046\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 11\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"gba_phone_portrait_red\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 8\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\""
    },
    {
        "name": "Gba_Phone_Yellow",
        "path": "extra/Touch-Overlays/Phone-Taller/GBA/gba_phone_yellow.cfg",
        "modes": [
            {
                "name": "Gba_phone_portrait_yellow",
                "image": "extra/Touch-Overlays/Phone-Taller/GBA/gba_phone_portrait_yellow.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GBA/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GBA/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"gba_phone_portrait_yellow\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = gba_phone_portrait_yellow.png\naspect_ratio = 0.56236559139784946237\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.07098,0.89111,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.41955,0.89254,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.58285,0.89254,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.14827,0.63348,rect,0.1497,0.01803\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.84719,0.63507,rect,0.15296,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.76945,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.22763,0.7169,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22986,0.72756,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.75226,0.77518,rect,0.20503,0.0891\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.4\noverlay0_desc8_reach_y = 1.4\noverlay0_desc8_range_mod_exclusive = true\noverlay0_desc9 = \"a,0.85465,0.73761,rect,0.10089,0.04587\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.65924,0.80666,rect,0.09245,0.04379\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"a|b,0.74365,0.78523,radial,0.03997,0.02032\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"a|b,0.75886,0.77518,radial,0.03997,0.02032\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"up|right,0.36583,0.7122,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"up|left,0.09388,0.7122,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"down|right,0.36583,0.83386,rect,0.05916,0.02614\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down|left,0.10104,0.83243,rect,0.05916,0.02614\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"right,0.33802,0.77231,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.22763,0.83482,rect,0.07436,0.04389\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.12049,0.77088,rect,0.09698,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"down,0.2273,0.83741,rect,0.07738,0.02251\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"left,0.07349,0.77136,rect,0.04504,0.03426\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"right,0.40232,0.77064,rect,0.04504,0.03426\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.50000,0.61487,radial,0.14385,0.03949\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 8\noverlay1_desc0 = \"menu_toggle,0.23862,0.6572,rect,0.21277,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84818,0.65864,rect,0.11585,0.01238\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.1977,0.84388,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50284,0.73546,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20631,0.73618,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84316,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80295,0.73618,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80941,0.84459,rect,0.08641,0.04046\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 11\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"gba_phone_portrait_yellow\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 8\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\""
    },
    {
        "name": "Gba_Phone_Yellow_Animated",
        "path": "extra/Touch-Overlays/Phone-Taller/GBA/gba_phone_yellow_animated.cfg",
        "modes": [
            {
                "name": "Gba_phone_portrait_yellow_animated",
                "image": "extra/Touch-Overlays/Phone-Taller/GBA/gba_phone_portrait_yellow_animated.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GBA/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GBA/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"gba_phone_portrait_yellow_animated\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = gba_phone_portrait_yellow_animated.png\naspect_ratio = 0.56236559139784946237\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.07277,0.88336,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc0_exclusive = true\noverlay0_desc1 = \"select,0.41955,0.87762,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.58253,0.88049,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.13665,0.61528,rect,0.16683,0.01931\"\noverlay0_desc3_overlay = gba_portrait_yellow_animated_l.png\noverlay0_desc3_alpha_mod = 0.001\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.86335,0.61528,rect,0.16683,0.01931\"\noverlay0_desc4_overlay = gba_portrait_yellow_animated_r.png\noverlay0_desc4_alpha_mod = 0.001\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.76945,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.23934,0.68807,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.23934,0.70075,rect,0.07362,0.02958\"\noverlay0_desc7_overlay = gba_portrait_yellow_animated_up.png\noverlay0_desc7_alpha_mod = 0.001\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.74336,0.76059,rect,0.20503,0.0891\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.4\noverlay0_desc8_reach_y = 1.4\noverlay0_desc8_range_mod_exclusive = true\noverlay0_desc9 = \"a,0.84244,0.7211,rect,0.09646,0.04405\"\noverlay0_desc9_overlay = gba_portrait_yellow_animated_a.png\noverlay0_desc9_alpha_mod = 0.001\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.64643,0.79505,rect,0.09502,0.04379\"\noverlay0_desc10_overlay = gba_portrait_yellow_animated_b.png\noverlay0_desc10_alpha_mod = 0.001\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"a|b,0.74365,0.75413,radial,0.03997,0.02032\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"a|b,0.75886,0.76633,radial,0.03997,0.02032\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"up|right,0.37216,0.70315,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"up|left,0.1022,0.70531,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"down|right,0.36583,0.81946,rect,0.05916,0.02614\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down|left,0.10104,0.81946,rect,0.05916,0.02614\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"right,0.36869,0.759,rect,0.06408,0.03209\"\noverlay0_desc17_overlay = gba_portrait_yellow_animated_right.png\noverlay0_desc17_alpha_mod = 0.001\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.23876,0.81564,rect,0.07362,0.02885\"\noverlay0_desc18_overlay = gba_portrait_yellow_animated_down.png\noverlay0_desc18_alpha_mod = 0.001\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.10591,0.7584,rect,0.06187,0.03178\"\noverlay0_desc19_overlay = gba_portrait_yellow_animated_left.png\noverlay0_desc19_alpha_mod = 0.001\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"down,0.24436,0.83741,rect,0.07738,0.02251\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"left,0.07349,0.75628,rect,0.04504,0.03426\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"right,0.40232,0.75556,rect,0.04504,0.03426\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.50000,0.61487,radial,0.14385,0.03949\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 8\noverlay1_desc0 = \"menu_toggle,0.23862,0.6572,rect,0.21277,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84818,0.65864,rect,0.11585,0.01238\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.1977,0.84388,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50284,0.73546,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20631,0.73618,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84316,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80295,0.73618,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80941,0.84459,rect,0.08641,0.04046\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 11\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"gba_phone_portrait_yellow_animated\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 8\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\""
    },
    {
        "name": "Gbc_Phone_Animated_Blue",
        "path": "extra/Touch-Overlays/Phone-Taller/GBC/gbc_phone_animated_blue.cfg",
        "modes": [
            {
                "name": "Gbc_phone_portrait_animated_blue",
                "image": "extra/Touch-Overlays/Phone-Taller/GBC/gbc_phone_portrait_animated_blue.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GBC/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GBC/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"gbc_phone_portrait_animated_blue\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = gbc_phone_portrait_animated_blue.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 23\noverlay0_desc0 = \"overlay_next,0.08386,0.90014,radial,0.05462,0.01267\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.39212,0.89646,radial,0.05161,0.01132\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.58338,0.90014,radial,0.05161,0.01132\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"dpad_area,0.2278,0.74512,rect,0.20741,0.08959\"\noverlay0_desc3_range_mod = 1.1\noverlay0_desc3_reach_x = 1.9\noverlay0_desc3_reach_y = 1.5\noverlay0_desc3_range_mod_exclusive = true\noverlay0_desc4 = \"up,0.22763,0.68071,rect,0.07436,0.01934\"\noverlay0_desc4_reach_x = 0\noverlay0_desc5 = \"up,0.23053,0.69109,rect,0.06604,0.02693\"\noverlay0_desc5_overlay = gbc_phone_portrait_animated_blue_up.png\noverlay0_desc5_alpha_mod = 0.001\noverlay0_desc5_reach_x = 0\noverlay0_desc6 = \"abxy_area,0.75226,0.74655,rect,0.20503,0.08243\"\noverlay0_desc6_range_mod = 1.1\noverlay0_desc6_reach_x = 1.4\noverlay0_desc6_reach_y = 1.4\noverlay0_desc6_range_mod_exclusive = true\noverlay0_desc7 = \"a,0.83958,0.71792,rect,0.09388,0.04236\"\noverlay0_desc7_overlay = gbc_phone_portrait_animated_blue_a.png\noverlay0_desc7_alpha_mod = 0.001\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"b,0.65009,0.77374,rect,0.09675,0.04379\"\noverlay0_desc8_overlay = gbc_phone_portrait_animated_blue_b.png\noverlay0_desc8_alpha_mod = 0.001\noverlay0_desc8_reach_x = 0\noverlay0_desc9 = \"a|b,0.74365,0.74369,radial,0.03997,0.02032\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"a|b,0.76945,0.77231,radial,0.03997,0.02032\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.36726,0.68644,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.08959,0.68644,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.36297,0.80666,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.09675,0.80523,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.35324,0.74621,rect,0.05806,0.03138\"\noverlay0_desc15_overlay = gbc_phone_portrait_animated_blue_right.png\noverlay0_desc15_alpha_mod = 0.001\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22763,0.80134,rect,0.06517,0.02782\"\noverlay0_desc16_overlay = gbc_phone_portrait_animated_blue_down.png\noverlay0_desc16_alpha_mod = 0.001\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.10428,0.74621,rect,0.06248,0.03048\"\noverlay0_desc17_overlay = gbc_phone_portrait_animated_blue_left.png\noverlay0_desc17_alpha_mod = 0.001\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2273,0.81668,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.07052,0.74512,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.74512,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"hold_fast_forward,0.50000,0.61773,radial,0.19195,0.02804\"\noverlay0_desc22 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc22_next_target = \"landscape\"\noverlay1_descs = 8\noverlay1_desc0 = \"menu_toggle,0.24077,0.66007,rect,0.21134,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.85177,0.65936,rect,0.11226,0.01238\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19482,0.84531,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.73546,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.202,0.73618,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84388,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80008,0.73618,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80582,0.84029,radial,0.07851,0.03543\u201d\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 9\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc4_overlay = menu-white.png\noverlay2_desc4_next_target = \"phone_landscape_pause\"\noverlay2_desc5 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc5_overlay = \"d-pad white.png\"\noverlay2_desc5_range_mod_exclusive = true\noverlay2_desc6 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc6_down = b\noverlay2_desc6_right = a\noverlay2_desc6_range_mod_exclusive = true\noverlay2_desc7 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc7_next_target = \"gbc_phone_portrait_animated_blue\"\noverlay2_desc8 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 8\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\""
    },
    {
        "name": "Gbc_Phone_Yellow",
        "path": "extra/Touch-Overlays/Phone-Taller/GBC/gbc_phone_yellow.cfg",
        "modes": [
            {
                "name": "Gbc_phone_portrait_yellow",
                "image": "extra/Touch-Overlays/Phone-Taller/GBC/gbc_phone_portrait_yellow.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GBC/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GBC/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"gbc_phone_portrait_yellow\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = gbc_phone_portrait_yellow.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 23\noverlay0_desc0 = \"overlay_next,0.07492,0.89772,radial,0.05462,0.01267\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.40471,0.89629,radial,0.05161,0.01132\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.59027,0.89772,radial,0.05161,0.01132\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"dpad_area,0.2278,0.77208,rect,0.20741,0.09296\"\noverlay0_desc3_range_mod = 1.1\noverlay0_desc3_reach_x = 1.9\noverlay0_desc3_reach_y = 1.5\noverlay0_desc3_range_mod_exclusive = true\noverlay0_desc4 = \"up,0.22763,0.70243,rect,0.07436,0.01934\"\noverlay0_desc4_reach_x = 0\noverlay0_desc5 = \"up,0.22763,0.72254,rect,0.07436,0.04389\"\noverlay0_desc5_reach_x = 0\noverlay0_desc6 = \"abxy_area,0.75226,0.77423,rect,0.20503,0.0891\"\noverlay0_desc6_range_mod = 1.1\noverlay0_desc6_reach_x = 1.4\noverlay0_desc6_reach_y = 1.4\noverlay0_desc6_range_mod_exclusive = true\noverlay0_desc7 = \"a,0.84316,0.73474,rect,0.10089,0.04587\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"b,0.65009,0.81085,rect,0.10089,0.04587\"\noverlay0_desc8_reach_x = 0\noverlay0_desc9 = \"a|b,0.74365,0.77208,radial,0.03997,0.02032\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"a|b,0.75886,0.77208,radial,0.03997,0.02032\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.37537,0.70818,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.08228,0.70674,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.37537,0.83382,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.08228,0.83454,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.33802,0.76705,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22763,0.81803,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12049,0.76562,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2273,0.83957,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.07052,0.76777,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.76562,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"hold_fast_forward,0.50000,0.63351,radial,0.19195,0.01748\"\noverlay0_desc22 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc22_next_target = \"landscape\"\noverlay1_descs = 8\noverlay1_desc0 = \"menu_toggle,0.24077,0.66007,rect,0.21134,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.85177,0.65936,rect,0.11226,0.01238\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19482,0.84531,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.73546,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.202,0.73618,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84388,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80008,0.73618,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80582,0.84029,radial,0.07851,0.03543\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 9\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc4_overlay = menu-white.png\noverlay2_desc4_next_target = \"phone_landscape_pause\"\noverlay2_desc5 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc5_overlay = \"d-pad white.png\"\noverlay2_desc5_range_mod_exclusive = true\noverlay2_desc6 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc6_down = b\noverlay2_desc6_right = a\noverlay2_desc6_range_mod_exclusive = true\noverlay2_desc7 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc7_next_target = \"gbc_phone_portrait_yellow\"\noverlay2_desc8 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 8\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\""
    },
    {
        "name": "Genesis_Grey",
        "path": "extra/Touch-Overlays/Phone-Taller/GENESIS/genesis_grey.cfg",
        "modes": [
            {
                "name": "Genesis_phone_portrait_grey",
                "image": "extra/Touch-Overlays/Phone-Taller/GENESIS/genesis_portrait_grey.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GENESIS/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/GENESIS/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"genesis_phone_portrait_grey\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = genesis_portrait_grey.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.14204,0.9227900000,radial,0.06535,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"start,0.4569,0.9248100000,radial,0.06871,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"r,0.80606,0.6688225000,rect,0.06669,0.02835\"\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"a,0.88612,0.7435025000,rect,0.06871,0.0344\"\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"dpad_area,0.2278,0.7728650000,rect,0.20741,0.09296\"\noverlay0_desc4_range_mod = 1.1\noverlay0_desc4_reach_x = 1.9\noverlay0_desc4_reach_y = 1.5\noverlay0_desc4_range_mod_exclusive = true\noverlay0_desc5 = \"up,0.22763,0.7039350000,rect,0.07436,0.01934\"\noverlay0_desc5_reach_x = 0\noverlay0_desc6 = \"up,0.22763,0.7261950000,rect,0.07436,0.04389\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"y,0.6311748544,0.8381637454,rect,0.0765792748,0.0352637546\"\noverlay0_desc7_exclusive = true\noverlay0_desc8 = \"b,0.76503,0.7917483647,rect,0.0765792748,0.0352637546\"\noverlay0_desc8_exclusive = true\noverlay0_desc9 = \"up|right,0.37537,0.7096750000,rect,0.05916,0.02614\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"up|left,0.08228,0.7096750000,rect,0.05916,0.02614\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"down|right,0.37537,0.8396350000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"down|left,0.08228,0.8367650000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"right,0.33802,0.7685550000,rect,0.09698,0.03426\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down,0.22763,0.8224050000,rect,0.07436,0.04389\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"left,0.12049,0.7728650000,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.2273,0.8425050000,rect,0.07738,0.02251\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.07052,0.7721450000,rect,0.04504,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"right,0.39094,0.7699850000,rect,0.04504,0.03426\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"x,0.5518942748,0.7729323264,rect,0.0765792748,0.0352637546\"\noverlay0_desc19_exclusive = true\noverlay0_desc20 = \"l,0.6671529736,0.7214912546,rect,0.0765792748,0.0352637546\"\noverlay0_desc20_exclusive = true\noverlay0_desc21 = \"hold_fast_forward,0.49996,0.5876400000,radial,0.12967,0.02948\"\noverlay0_desc22 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc22_next_target = \"landscape\"\noverlay0_desc23 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc23_next_target = \"landscape\"\noverlay0_desc24 = \"select,0.86123,0.94331,radial,0.06535,0.01758\"\noverlay0_desc24_overlay = mode-white.png\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24149,0.6617400000,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.6610200000,rect,0.12338,0.03871\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.8462600000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7392800000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.7385600000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8462600000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.7385600000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.8462600000,radial,0.07995,0.03543\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 14\noverlay2_desc0 = \"y,0.805995,0.92223,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-grey.png\noverlay2_desc0_exclusive = true\noverlay2_desc1 = \"b,0.88174,0.78234,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-grey.png\noverlay2_desc1_exclusive = true\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = mode-white.png\noverlay2_desc4 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc4_overlay = menu-white.png\noverlay2_desc4_next_target = \"phone_landscape_pause\"\noverlay2_desc5 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc5_overlay = \"d-pad white.png\"\noverlay2_desc5_range_mod_exclusive = true\noverlay2_desc6 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc6_next_target = \"genesis_phone_portrait_grey\"\noverlay2_desc7 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc8 = \"x,0.72344,0.81547,radial,0.04167,0.07407\"\noverlay2_desc8_overlay = y-grey.png\noverlay2_desc8_exclusive = true\noverlay2_desc9 = \"l,0.79395,0.66815,radial,0.04167,0.07407\"\noverlay2_desc9_overlay = x-grey.png\noverlay2_desc9_exclusive = true\noverlay2_desc10 = \"a,0.93994,0.62913,radial,0.04167,0.07407\"\noverlay2_desc10_overlay = c-grey.png\noverlay2_desc10_exclusive = true\noverlay2_desc11 = \"r,0.85719,0.51947,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = z-grey.png\noverlay2_desc11_exclusive = true\noverlay2_desc12 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc12_next_target = \"genesis_phone_portrait_grey\"\noverlay2_desc13 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc13_overlay = 0\noverlay2_desc13_next_target = \"genesis_phone_portrait_grey\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.0879050000,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1099950000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1136750000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1099950000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9137950000,0.0856800000,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8880250000,0.2807900000,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8880250000,0.5679300000,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8880250000,0.8440300000,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "N64_Phone_Green",
        "path": "extra/Touch-Overlays/Phone-Taller/N64/n64_phone_green.cfg",
        "modes": [
            {
                "name": "N64_phone_portrait_green",
                "image": "extra/Touch-Overlays/Phone-Taller/N64/n64_phone_portrait_green.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/N64/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/N64/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"n64_phone_portrait_green\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = n64_phone_portrait_green.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 32\noverlay0_desc0 = \"overlay_next,0.49321,0.56907,radial,0.05094,0.01087\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.41955,0.77804,radial,0.05238,0.0123\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.49751,0.77518,radial,0.04665,0.01946\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.14112,0.54903,rect,0.14827,0.02012\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.8539,0.54903,rect,0.13825,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.86248,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc6 = \"up,0.22763,0.7909200000,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22763,0.8023700000,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"up|right,0.35724,0.7952200000,rect,0.05916,0.02614\"\noverlay0_desc8_reach_x = 0\noverlay0_desc9 = \"up|left,0.09531,0.7909200000,rect,0.05916,0.02614\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"down|right,0.3644,0.9082900000,rect,0.05916,0.02614\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"down|left,0.10104,0.9125800000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"right,0.33802,0.8524700000,rect,0.09698,0.03426\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down,0.22763,0.9054300000,rect,0.07436,0.04389\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"left,0.12049,0.8510400000,rect,0.09698,0.03426\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"down,0.2273,0.9154400000,rect,0.07738,0.02251\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"left,0.08816,0.8524700000,rect,0.04504,0.03426\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"right,0.39094,0.8496100000,rect,0.04504,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"hold_fast_forward,0.49751,0.51468,radial,0.081,0.02661\"\noverlay0_desc19 = \"analog_left,0.22699,0.66497,radial,0.11392,0.05953\"\noverlay0_desc19_overlay = n64_phone_portrait_thumbstick.png\noverlay0_desc19_range_mod = 3.0\noverlay0_desc19_saturate_pct = 0.65\noverlay0_desc19_movable = true\noverlay0_desc19_range_mod_exclusive = true\noverlay0_desc20 = \"l2,0.79665,0.61487,radial,0.09245,0.04093\"\noverlay0_desc20_reach_x = 1.2\noverlay0_desc20_reach_y = 2.0\noverlay0_desc20_exclusive = true\noverlay0_desc21 = \"b|y,0.73817,0.70135,radial,0.02767,0.02767\"\noverlay0_desc22 = \"l2|b,0.84124,0.66454,radial,0.05000,0.01294\"\noverlay0_desc23 = \"l2|y,0.69399,0.64245,radial,0.02767,0.00926\"\noverlay0_desc24 = \"r_x_minus,0.61668,0.85597,radial,0.05712,0.02767\"\noverlay0_desc24_reach_x = 0\noverlay0_desc25 = \"r_x_plus,0.85597,0.85597,radial,0.05712,0.03135\"\noverlay0_desc25_reach_x = 0\noverlay0_desc26 = \"r_y_minus,0.73448,0.90751,radial,0.0608,0.02767\"\noverlay0_desc26_reach_x = 0\noverlay0_desc27 = \"r_y_plus,0.73448,0.80811,radial,0.06448,0.03135\"\noverlay0_desc27_reach_x = 0\noverlay0_desc28 = \"b,0.85229,0.71608,radial,0.09393,0.04239\"\noverlay0_desc28_reach_x = 1.2\noverlay0_desc28_reach_y = 2.0\noverlay0_desc28_exclusive = true\noverlay0_desc29 = \"y,0.62404,0.67926,radial,0.08657,0.04239\"\noverlay0_desc29_reach_x = 1.2\noverlay0_desc29_reach_y = 2.0\noverlay0_desc29_exclusive = true\noverlay0_desc30 = \"abxy_area,0.73448,0.85597,radial,0.18228,0.08289\"\noverlay0_desc30_down = r_y_minus\noverlay0_desc30_right = r_x_plus\noverlay0_desc30_up = r_y_plus\noverlay0_desc30_left = r_x_minus\noverlay0_desc30_exclusive = true\noverlay0_desc31 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc31_next_target = \"landscape\"\noverlay1_descs = 8\noverlay1_desc0 = \"menu_toggle,0.24149,0.65936,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.65864,rect,0.1022,0.01238\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.84388,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7369,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.73618,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84388,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.73618,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.84388,radial,0.07995,0.03543\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 13\noverlay2_desc0 = \"b,0.93750,0.53569,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-n64-grey.png\noverlay2_desc0_exclusive = true\noverlay2_desc1 = \"y,0.84861,0.46943,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-n64-grey.png\noverlay2_desc1_exclusive = true\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc3_exclusive = true\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc4_exclusive = true\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_exclusive = true\noverlay2_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc8_next_target = \"n64_phone_portrait_green\"\noverlay2_desc9 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc10 = \"dpad_area,0.87437,0.80811,radial,0.11234,0.1786\"\noverlay2_desc10_overlay = c-pad-grey.png\noverlay2_desc10_range_mod_exclusive = true\noverlay2_desc10_down = r_y_minus\noverlay2_desc10_right = r_x_plus\noverlay2_desc10_up = r_y_plus\noverlay2_desc10_left = r_x_minus\noverlay2_desc11 = \"l2,0.92223,0.35531,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = z-n64-grey.png\noverlay2_desc12 = \"analog_left,0.11602,0.40316,radial,0.04976,0.07921\"\noverlay2_desc12_overlay = landscape_thumbstick.png\noverlay2_desc12_range_mod = 3.0\noverlay2_desc12_saturate_pct = 0.65\noverlay2_desc12_movable = true\noverlay2_desc12_range_mod_exclusive = true\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 8\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\""
    },
    {
        "name": "Nds_Phone_Black",
        "path": "extra/Touch-Overlays/Phone-Taller/NDS/nds_phone_black.cfg",
        "modes": [
            {
                "name": "Nds_phone_portrait_black",
                "image": "extra/Touch-Overlays/Phone-Taller/NDS/nds_phone_portrait_black.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/NDS/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/NDS/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"nds_phone_portrait_black\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = nds_phone_portrait_black.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 26\noverlay0_desc0 = \"overlay_next,0.50323,0.95588,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc0_exclusive = true\noverlay0_desc1 = \"select,0.44324,0.76849,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.55668,0.76849,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.1661,0.75371,rect,0.15677,0.02012\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.84962,0.75371,rect,0.14241,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.23072,0.88121,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.1\noverlay0_desc5_reach_y = 1.1\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.22426,0.80439,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.23072,0.81516,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.71608,0.87806,rect,0.22278,0.09761\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.0\noverlay0_desc8_reach_y = 1.0\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc8_range_mod_exclusive = true\noverlay0_desc9 = \"a,0.86066,0.88109,rect,0.08448,0.03782\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.71976,0.94064,rect,0.08289,0.03782\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.35852,0.8209,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.10436,0.82018,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.35852,0.93721,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.10651,0.93506,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.34129,0.87403,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22713,0.9487,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12446,0.87475,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.22929,0.95732,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.07052,0.87547,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.87259,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.71539,0.81811,rect,0.08448,0.03782\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.56889,0.87806,rect,0.08448,0.03782\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.50000,0.73259,radial,0.06918,0.01748\"\noverlay0_desc24 = \"r3,0.97239,0.80811,radial,0.02323,0.03135\"\noverlay0_desc24_exclusive = true\noverlay0_desc25 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc25_next_target = \"landscape\"\noverlay1_descs = 11\noverlay1_desc0 = \"menu_toggle,0.23862,0.66007,rect,0.21205,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.8288,0.66079,rect,0.1618,0.02179\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.20488,0.84603,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.73761,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20416,0.73905,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84603,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80295,0.73977,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80582,0.841,radial,0.07564,0.03543\"\noverlay1_desc8 = \"r2,0.27432,0.57987,rect,0.10498,0.05000\"\noverlay1_desc8_overlay = ds-changelayout.png\noverlay1_desc9 = \"l3,0.72712,0.57987,radial,0.10498,0.05000\"\noverlay1_desc9_overlay = ds-closelid.png\noverlay1_desc10 = \"l2,0.5,0.57987,radial,0.10498,0.05000\"\noverlay1_desc10_overlay = ds-microphone.png\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 13\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-grey.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87069,0.91487,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-grey.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.87069,0.78602,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"nds_phone_portrait_black\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.80075,0.78602,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = y-grey.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.86701,0.66086,radial,0.04167,0.07407\"\noverlay2_desc12_overlay = x-grey.png\noverlay2_desc12_range_x = 0\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 11\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"r2,0.38476,0.87806,radial,0.05000,0.10498\"\noverlay3_desc8_overlay = ds-changelayout.png\noverlay3_desc9 = \"l2,0.50000,0.87806,rect,0.05000,0.10498\"\noverlay3_desc9_overlay = ds-microphone.png\noverlay3_desc10 = \"l3,0.61668,0.87806,radial,0.05000,0.10498\"\noverlay3_desc10_overlay = ds-closelid.png"
    },
    {
        "name": "Nds_Phone_White",
        "path": "extra/Touch-Overlays/Phone-Taller/NDS/nds_phone_white.cfg",
        "modes": [
            {
                "name": "Nds_phone_portrait_white",
                "image": "extra/Touch-Overlays/Phone-Taller/NDS/nds_phone_portrait_white.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/NDS/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/NDS/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"nds_phone_portrait_white\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = nds_phone_portrait_white.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.50323,0.96983,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc0_exclusive = true\noverlay0_desc1 = \"select,0.44741,0.79864,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.55668,0.79505,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.21923,0.75371,rect,0.17472,0.02012\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.77926,0.75371,rect,0.17903,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.24006,0.89557,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.1\noverlay0_desc5_reach_y = 1.1\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.24006,0.82162,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.24293,0.83885,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.75341,0.89054,rect,0.21134,0.09359\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.0\noverlay0_desc8_reach_y = 1.0\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc8_range_mod_exclusive = true\noverlay0_desc9 = \"a,0.86066,0.88109,rect,0.08448,0.03782\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.72282,0.94693,rect,0.08448,0.03782\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.37537,0.8367,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.09933,0.83311,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.37537,0.95229,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.10651,0.95301,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.34129,0.89413,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.24221,0.9487,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12446,0.89485,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.24436,0.96809,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.07052,0.89629,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.89557,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.71539,0.81811,rect,0.08448,0.03782\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.57649,0.88252,rect,0.08448,0.03782\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.50000,0.75844,radial,0.06918,0.02035\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 11\noverlay1_desc0 = \"menu_toggle,0.23862,0.66007,rect,0.21205,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.8288,0.66079,rect,0.1618,0.02179\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.20488,0.84603,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.73761,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20416,0.73905,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84603,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80295,0.73977,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80582,0.841,radial,0.07564,0.03543\"\noverlay1_desc8 = \"r2,0.27432,0.57987,rect,0.10498,0.05000\"\noverlay1_desc8_overlay = ds-changelayout.png\noverlay1_desc9 = \"l3,0.72712,0.57987,radial,0.10498,0.05000\"\noverlay1_desc9_overlay = ds-closelid.png\noverlay1_desc10 = \"l2,0.5,0.57987,radial,0.10498,0.05000\"\noverlay1_desc10_overlay = ds-microphone.png\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 13\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-grey.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87069,0.91487,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-grey.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.87069,0.78602,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"nds_phone_portrait_white\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.80075,0.78602,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = y-grey.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.86701,0.66086,radial,0.04167,0.07407\"\noverlay2_desc12_overlay = x-grey.png\noverlay2_desc12_range_x = 0\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 11\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"r2,0.38476,0.87806,radial,0.05000,0.10498\"\noverlay3_desc8_overlay = ds-changelayout.png\noverlay3_desc9 = \"l2,0.50000,0.87806,rect,0.05000,0.10498\"\noverlay3_desc9_overlay = ds-microphone.png\noverlay3_desc10 = \"l3,0.61668,0.87806,radial,0.05000,0.10498\"\noverlay3_desc10_overlay = ds-closelid.png"
    },
    {
        "name": "Nds_Phone_White_Animated",
        "path": "extra/Touch-Overlays/Phone-Taller/NDS/nds_phone_white_animated.cfg",
        "modes": [
            {
                "name": "Nds_phone_portrait_white",
                "image": "extra/Touch-Overlays/Phone-Taller/NDS/nds_phone_portrait_animated_white.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/NDS/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/NDS/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"nds_phone_portrait_white\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = nds_phone_portrait_animated_white.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.50323,0.96983,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc0_exclusive = true\noverlay0_desc1 = \"select,0.44741,0.79864,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.55668,0.79505,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.23382,0.75657,rect,0.16388,0.02399\"\noverlay0_desc3_overlay = l-white-animated.png\noverlay0_desc3_alpha_mod = 0.001\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.76762,0.75657,rect,0.16388,0.02399\"\noverlay0_desc4_overlay = r-white-animated.png\noverlay0_desc4_alpha_mod = 0.001\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.24118,0.89557,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.1\noverlay0_desc5_reach_y = 1.1\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.24006,0.82162,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.2375,0.8302,rect,0.07184,0.03135\"\noverlay0_desc7_overlay = dpad-up-white-animated.png\noverlay0_desc7_alpha_mod = 0.001\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.75341,0.89054,rect,0.21134,0.09359\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.0\noverlay0_desc8_reach_y = 1.0\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc8_range_mod_exclusive = true\noverlay0_desc9 = \"a,0.8891,0.88542,rect,0.07184,0.03503\"\noverlay0_desc9_overlay = a-white-animated.png\noverlay0_desc9_alpha_mod = 0.001\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.75289,0.94432,rect,0.07184,0.03135\"\noverlay0_desc10_overlay = b-white-animated.png\noverlay0_desc10_alpha_mod = 0.001\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.37537,0.8367,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.09933,0.83311,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.37537,0.95229,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.10651,0.95301,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.37003,0.89413,rect,0.06448,0.03135\"\noverlay0_desc15_overlay = dpad-right-white-animated.png\noverlay0_desc15_alpha_mod = 0.001\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.2375,0.95168,rect,0.07184,0.03135\"\noverlay0_desc16_overlay = dpad-down-white-animated.png\noverlay0_desc16_alpha_mod = 0.001\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.10498,0.89278,rect,0.0608,0.03135\"\noverlay0_desc17_overlay = dpad-left-white-animated.png\noverlay0_desc17_alpha_mod = 0.001\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.24436,0.96809,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.07052,0.89629,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.89557,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.75289,0.8302,rect,0.07184,0.03503\"\noverlay0_desc21_overlay = x-white-animated.png\noverlay0_desc21_alpha_mod = 0.001\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.61668,0.88542,rect,0.07552,0.03503\"\noverlay0_desc22_overlay = y-white-animated.png\noverlay0_desc22_alpha_mod = 0.001\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.50000,0.75844,radial,0.06918,0.02035\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 11\noverlay1_desc0 = \"menu_toggle,0.23862,0.66007,rect,0.21205,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.8288,0.66079,rect,0.1618,0.02179\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.20488,0.84603,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.73761,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20416,0.73905,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84603,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80295,0.73977,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80582,0.841,radial,0.07564,0.03543\"\noverlay1_desc8 = \"r2,0.27432,0.57987,rect,0.10498,0.05000\"\noverlay1_desc8_overlay = ds-changelayout.png\noverlay1_desc9 = \"l3,0.72712,0.57987,radial,0.10498,0.05000\"\noverlay1_desc9_overlay = ds-closelid.png\noverlay1_desc10 = \"l2,0.5,0.57987,radial,0.10498,0.05000\"\noverlay1_desc10_overlay = ds-microphone.png\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 13\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-grey.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87069,0.91487,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-grey.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.87069,0.78602,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"nds_phone_portrait_white\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.80075,0.78602,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = y-grey.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.86701,0.66086,radial,0.04167,0.07407\"\noverlay2_desc12_overlay = x-grey.png\noverlay2_desc12_range_x = 0\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 11\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"r2,0.38476,0.87806,radial,0.05000,0.10498\"\noverlay3_desc8_overlay = ds-changelayout.png\noverlay3_desc9 = \"l2,0.50000,0.87806,rect,0.05000,0.10498\"\noverlay3_desc9_overlay = ds-microphone.png\noverlay3_desc10 = \"l3,0.61668,0.87806,radial,0.05000,0.10498\"\noverlay3_desc10_overlay = ds-closelid.png"
    },
    {
        "name": "Nes_Phone_Beige",
        "path": "extra/Touch-Overlays/Phone-Taller/NES/nes_phone_beige.cfg",
        "modes": [
            {
                "name": "Nes_phone_portrait_beige",
                "image": "extra/Touch-Overlays/Phone-Taller/NES/nes_phone_portrait_beige.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/NES/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/NES/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"nes_phone_portrait_beige\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = nes_phone_portrait_beige.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 22\noverlay0_desc0 = \"overlay_next,0.90256,0.70791,radial,0.03234,0.01267\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.39445,0.90542,radial,0.06669,0.0123\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.59027,0.90542,radial,0.0624,0.01132\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"dpad_area,0.24131,0.78806,rect,0.15972,0.081\"\noverlay0_desc3_range_mod = 1.1\noverlay0_desc3_reach_x = 1.9\noverlay0_desc3_reach_y = 1.5\noverlay0_desc3_range_mod_exclusive = true\noverlay0_desc4 = \"up,0.24131,0.72937,rect,0.07436,0.01934\"\noverlay0_desc4_reach_x = 0\noverlay0_desc5 = \"up,0.23844,0.72508,rect,0.07436,0.03091\"\noverlay0_desc5_reach_x = 0\noverlay0_desc6 = \"a,0.81525,0.79235,rect,0.07385,0.0352\"\noverlay0_desc6_reach_x = 1.2\noverlay0_desc6_reach_y = 2.0\noverlay0_desc6_exclusive = true\noverlay0_desc7 = \"b,0.61201,0.78949,rect,0.07957,0.0352\"\noverlay0_desc7_reach_x = 1.2\noverlay0_desc7_reach_y = 2.0\noverlay0_desc7_exclusive = true\noverlay0_desc8 = \"a|b,0.71506,0.7852,radial,0.02375,0.03806\"\noverlay0_desc8_reach_x = 0\noverlay0_desc9 = \"a|b,0.71649,0.78663,radial,0.02518,0.03377\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"up|right,0.3644,0.72794,rect,0.05916,0.02614\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|left,0.11392,0.72794,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"down|right,0.35724,0.83382,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|left,0.12537,0.83454,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"right,0.36726,0.7852,rect,0.09245,0.03426\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"down,0.24989,0.84102,rect,0.07436,0.0352\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"left,0.12049,0.78376,rect,0.07814,0.03426\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"down,0.23844,0.83957,rect,0.07738,0.02251\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"left,0.10533,0.78376,rect,0.04504,0.03426\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"right,0.39094,0.78376,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"hold_fast_forward,0.50000,0.64779,radial,0.19195,0.02518\"\noverlay0_desc21 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc21_next_target = \"landscape\"\noverlay1_descs = 8\noverlay1_desc0 = \"menu_toggle,0.24077,0.66007,rect,0.21134,0.01238\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.85177,0.65936,rect,0.11226,0.01238\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19482,0.84531,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.73546,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.202,0.73618,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84388,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80008,0.73618,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80582,0.84029,radial,0.07851,0.03543\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 9\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-white.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87500,0.88889,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-white.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc4_overlay = menu-white.png\noverlay2_desc4_next_target = \"phone_landscape_pause\"\noverlay2_desc5 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc5_overlay = \"d-pad white.png\"\noverlay2_desc5_range_mod_exclusive = true\noverlay2_desc6 = \"abxy_area,0.86333,0.7713,radial,0.12338,0.21542\"\noverlay2_desc6_down = b\noverlay2_desc6_right = a\noverlay2_desc6_range_mod_exclusive = true\noverlay2_desc7 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc7_next_target = \"nes_phone_portrait_beige\"\noverlay2_desc8 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 8\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\""
    },
    {
        "name": "Psp_Phone_White",
        "path": "extra/Touch-Overlays/Phone-Taller/PSP/psp_phone_white.cfg",
        "modes": [
            {
                "name": "Psp_phone_portrait_white",
                "image": "extra/Touch-Overlays/Phone-Taller/PSP/psp_phone_portrait_white.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/PSP/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/PSP/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"psp_phone_portrait_white\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = psp_phone_portrait_white.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 26\noverlay0_desc0 = \"overlay_next,0.49321,0.8997,radial,0.05094,0.01087\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.41955,0.77804,radial,0.05238,0.0123\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.57766,0.77804,radial,0.04665,0.01087\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.20797,0.53758,rect,0.22345,0.02012\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.78184,0.53615,rect,0.21134,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.66497,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc6 = \"up,0.22763,0.60485,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22763,0.6163,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.73939,0.66497,rect,0.23415,0.09818\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.4\noverlay0_desc8_reach_y = 1.4\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc9 = \"a,0.88252,0.66926,rect,0.08448,0.03782\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.73939,0.72508,rect,0.08448,0.03782\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.35724,0.60915,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.09531,0.60485,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.3644,0.72222,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.10104,0.72651,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.33802,0.6664,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22763,0.71936,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12049,0.66497,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2273,0.72937,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.08816,0.6664,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.66354,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.73367,0.60772,rect,0.08448,0.03782\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.58768,0.66783,rect,0.08448,0.03782\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.49751,0.50992,radial,0.05712,0.04239\"\noverlay0_desc24 = \"analog_left,0.24417,0.86392,radial,0.07814,0.03949\"\noverlay0_desc24_overlay = psp-thumbstick.png\noverlay0_desc24_range_mod = 3.0\noverlay0_desc24_saturate_pct = 0.65\noverlay0_desc24_movable = true\noverlay0_desc24_range_mod_exclusive = true\noverlay0_desc25 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc25_next_target = \"landscape\"\noverlay1_descs = 8\noverlay1_desc0 = \"menu_toggle,0.24149,0.65936,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.65864,rect,0.1022,0.01238\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.84388,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7369,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.73618,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84388,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.73618,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.84388,radial,0.07995,0.03543\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 19\noverlay2_desc0 = \"a,0.95536,0.78602,radial,0.03135,0.05344\"\noverlay2_desc0_overlay = circle35.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.8891,0.89278,radial,0.03135,0.05344\"\noverlay2_desc1_overlay = cross-35.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.77722,0.94064,rect,0.02399,0.03503\"\noverlay2_desc2_overlay = start35.png\noverlay2_desc2_exclusive = true\noverlay2_desc3 = \"select,0.22278,0.94064,rect,0.02399,0.03503\"\noverlay2_desc3_overlay = select35.png\noverlay2_desc3_exclusive = true\noverlay2_desc4 = \"l,0.04239,0.06448,rect,0.03135,0.03503\"\noverlay2_desc4_overlay = L135.png\noverlay2_desc5 = \"r,0.95761,0.06448,rect,0.03135,0.03503\"\noverlay2_desc5_overlay = r135.png\noverlay2_desc6 = \"overlay_next,0.19701,0.05712,radial,0.01662,0.02767\"\noverlay2_desc6_overlay = menu35.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.09761,0.79339,radial,0.07921,0.13074\"\noverlay2_desc7_overlay = dpad35.png\noverlay2_desc7_exclusive = true\noverlay2_desc7_reach_x = 1.9\noverlay2_desc7_reach_y = 1.9\noverlay2_desc8 = \"abxy_area,0.88174,0.77866,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"psp_phone_portrait_white\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.82284,0.78602,radial,0.03135,0.05344\"\noverlay2_desc11_overlay = square35.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.8891,0.68663,radial,0.03135,0.05344\"\noverlay2_desc12_overlay = triangle35.png\noverlay2_desc12_range_x = 0\noverlay2_desc13 = \"l2,0.11602,0.07184,radial,0.03135,0.04239\"\noverlay2_desc13_overlay = l235.png\noverlay2_desc14 = \"r2,0.88398,0.07184,radial,0.03135,0.04239\"\noverlay2_desc14_overlay = r235.png\noverlay2_desc15 = \"analog_left,0.09761,0.40316,radial,0.03503,0.05712\"\noverlay2_desc15_overlay = l35.png\noverlay2_desc15_range_mod = 7.0\noverlay2_desc15_saturate_pct = 0.65\noverlay2_desc15_movable = true\noverlay2_desc15_range_mod_exclusive = true\noverlay2_desc16 = \"analog_right,0.90239,0.40316,radial,0.03503,0.05712\"\noverlay2_desc16_overlay = r35.png\noverlay2_desc16_range_mod = 7.0\noverlay2_desc16_saturate_pct = 0.65\noverlay2_desc16_movable = true\noverlay2_desc16_range_mod_exclusive = true\noverlay2_desc17 = \"l3,0.03503,0.17492,radial,0.02767,0.04607\"\noverlay2_desc17_overlay = l335.png\noverlay2_desc18 = \"r3,0.96497,0.17492,radial,0.02767,0.04607\"\noverlay2_desc18_overlay = r335.png\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 8\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\""
    },
    {
        "name": "Psx_Phone_Beige",
        "path": "extra/Touch-Overlays/Phone-Taller/PSX/psx_phone_beige.cfg",
        "modes": [
            {
                "name": "Psx_phone_portrait_beige",
                "image": "extra/Touch-Overlays/Phone-Taller/PSX/psx_phone_portrait_beige.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/PSX/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/PSX/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"psx_phone_portrait_beige\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = psx_phone_portrait_beige.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 31\noverlay0_desc0 = \"overlay_next,0.49321,0.8997,radial,0.05094,0.01087\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.41955,0.77804,radial,0.05238,0.0123\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.57766,0.77804,radial,0.04665,0.01087\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.10866,0.53758,rect,0.10498,0.02012\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.89278,0.53615,rect,0.10498,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.66497,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc6 = \"up,0.22763,0.60485,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22763,0.6163,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.73939,0.66497,rect,0.23415,0.09818\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.4\noverlay0_desc8_reach_y = 1.4\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc9 = \"a,0.88252,0.66926,rect,0.08448,0.03782\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.73939,0.72508,rect,0.08448,0.03782\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.35724,0.60915,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.09531,0.60485,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.3644,0.72222,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.10104,0.72651,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.33802,0.6664,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22763,0.71936,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12049,0.66497,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2273,0.72937,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.08816,0.6664,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.66354,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.73367,0.60772,rect,0.08448,0.03782\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.58768,0.66783,rect,0.08448,0.03782\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.49751,0.50992,radial,0.05712,0.04239\"\noverlay0_desc24 = \"l2,0.32217,0.53569,radial,0.10866,0.01803\"\noverlay0_desc24_reach_x = 1.2\noverlay0_desc24_reach_y = 2.0\noverlay0_desc24_exclusive = true\noverlay0_desc25 = \"r2,0.67926,0.53472,radial,0.10498,0.01946\"\noverlay0_desc25_reach_x = 1.2\noverlay0_desc25_reach_y = 2.0\noverlay0_desc25_exclusive = true\noverlay0_desc26 = \"l3,0.25223,0.97377,radial,0.14179,0.0203\"\noverlay0_desc27 = \"r3,0.74798,0.97377,radial,0.13811,0.0203\"\noverlay0_desc28 = \"analog_left,0.24417,0.86105,radial,0.07814,0.03949\"\noverlay0_desc28_overlay = psx_phone_portrait_analog.png\noverlay0_desc28_range_mod = 3.0\noverlay0_desc28_saturate_pct = 0.65\noverlay0_desc28_movable = true\noverlay0_desc28_range_mod_exclusive = true\noverlay0_desc29 = \"analog_right,0.74369,0.86105,radial,0.07814,0.03949\"\noverlay0_desc29_overlay = psx_phone_portrait_analog.png\noverlay0_desc29_range_mod = 3.0\noverlay0_desc29_saturate_pct = 0.65\noverlay0_desc29_movable = true\noverlay0_desc29_range_mod_exclusive = true\noverlay0_desc30 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc30_next_target = \"landscape\"\noverlay1_descs = 8\noverlay1_desc0 = \"menu_toggle,0.24149,0.65936,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.65864,rect,0.1022,0.01238\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.84388,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7369,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.73618,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84388,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.73618,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.84388,radial,0.07995,0.03543\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 19\noverlay2_desc0 = \"a,0.95536,0.78602,radial,0.03135,0.05344\"\noverlay2_desc0_overlay = circle35.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.8891,0.89278,radial,0.03135,0.05344\"\noverlay2_desc1_overlay = cross-35.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.77722,0.94064,rect,0.02399,0.03503\"\noverlay2_desc2_overlay = start35.png\noverlay2_desc2_exclusive = true\noverlay2_desc3 = \"select,0.22278,0.94064,rect,0.02399,0.03503\"\noverlay2_desc3_overlay = select35.png\noverlay2_desc3_exclusive = true\noverlay2_desc4 = \"l,0.04239,0.06448,rect,0.03135,0.03503\"\noverlay2_desc4_overlay = L135.png\noverlay2_desc5 = \"r,0.95761,0.06448,rect,0.03135,0.03503\"\noverlay2_desc5_overlay = r135.png\noverlay2_desc6 = \"overlay_next,0.19701,0.05712,radial,0.01662,0.02767\"\noverlay2_desc6_overlay = menu35.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.09761,0.79339,radial,0.07921,0.13074\"\noverlay2_desc7_overlay = dpad35.png\noverlay2_desc7_exclusive = true\noverlay2_desc7_reach_x = 1.9\noverlay2_desc7_reach_y = 1.9\noverlay2_desc8 = \"abxy_area,0.88174,0.77866,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"psx_phone_portrait_beige\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.82284,0.78602,radial,0.03135,0.05344\"\noverlay2_desc11_overlay = square35.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.8891,0.68663,radial,0.03135,0.05344\"\noverlay2_desc12_overlay = triangle35.png\noverlay2_desc12_range_x = 0\noverlay2_desc13 = \"l2,0.11602,0.07184,radial,0.03135,0.04239\"\noverlay2_desc13_overlay = l235.png\noverlay2_desc14 = \"r2,0.88398,0.07184,radial,0.03135,0.04239\"\noverlay2_desc14_overlay = r235.png\noverlay2_desc15 = \"analog_left,0.09761,0.40316,radial,0.03503,0.05712\"\noverlay2_desc15_overlay = l35.png\noverlay2_desc15_range_mod = 7.0\noverlay2_desc15_saturate_pct = 0.65\noverlay2_desc15_movable = true\noverlay2_desc15_range_mod_exclusive = true\noverlay2_desc16 = \"analog_right,0.90239,0.40316,radial,0.03503,0.05712\"\noverlay2_desc16_overlay = r35.png\noverlay2_desc16_range_mod = 7.0\noverlay2_desc16_saturate_pct = 0.65\noverlay2_desc16_movable = true\noverlay2_desc16_range_mod_exclusive = true\noverlay2_desc17 = \"l3,0.03503,0.17492,radial,0.02767,0.04607\"\noverlay2_desc17_overlay = l335.png\noverlay2_desc18 = \"r3,0.96497,0.17492,radial,0.02767,0.04607\"\noverlay2_desc18_overlay = r335.png\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 8\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\""
    },
    {
        "name": "Psx_Phone_Transparent",
        "path": "extra/Touch-Overlays/Phone-Taller/PSX/psx_phone_transparent.cfg",
        "modes": [
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/PSX/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/PSX/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"psx_phone_portrait_transparent\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 31\noverlay0_desc0 = \"overlay_next,0.49321,0.89278,radial,0.05094,0.01087\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.41955,0.7602500000,radial,0.05238,0.0236400000\"\noverlay0_desc1_overlay = select35.png\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.57766,0.7602500000,radial,0.04665,0.0208916098\"\noverlay0_desc2_overlay = start35.png\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.09091,0.49861,rect,0.0700711533,0.02012\"\noverlay0_desc3_overlay = L135.png\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.9203792500,0.5003250000,rect,0.0700711533,0.02012\"\noverlay0_desc4_overlay = r135.png\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.22614,0.6434700000,rect,0.15954,0.0788\"\noverlay0_desc5_overlay = dpad35.png\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc6 = \"up,0.22763,0.5833500000,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22763,0.5948000000,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.7393829301,0.6387700000,rect,0.2325270699,0.09818\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.4\noverlay0_desc8_reach_y = 1.4\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc9 = \"a,0.88007,0.6430600000,rect,0.0714,0.03782\"\noverlay0_desc9_overlay = circle35.png\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.7393829301,0.70986,rect,0.0714,0.03782\"\noverlay0_desc10_overlay = cross-35.png\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.35724,0.5876500000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.09531,0.5833500000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.3644,0.7007200000,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.10104,0.7050100000,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.33802,0.6449000000,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22763,0.6978600000,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12049,0.6434700000,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2273,0.7078700000,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.08816,0.6449000000,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.6420400000,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.7393829301,0.5815200000,rect,0.0714,0.03782\"\noverlay0_desc21_overlay = triangle35.png\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.59616,0.6416300000,rect,0.0714,0.03782\"\noverlay0_desc22_overlay = square35.png\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.4985774153,0.4740950000,radial,0.08553,0.04239\"\noverlay0_desc24 = \"l2,0.25103,0.501755,radial,0.0725274450,0.02364\"\noverlay0_desc24_overlay = l235.png\noverlay0_desc24_reach_x = 1.2\noverlay0_desc24_reach_y = 2.0\noverlay0_desc24_exclusive = true\noverlay0_desc25 = \"r2,0.74897,0.501755,radial,0.072527445,0.02364\"\noverlay0_desc25_overlay = r235.png\noverlay0_desc25_reach_x = 1.2\noverlay0_desc25_reach_y = 2.0\noverlay0_desc25_exclusive = true\noverlay0_desc26 = \"l3,0.3799816880,0.9567600000,radial,0.0681666880,0.0310400000\"\noverlay0_desc26_overlay = l335.png\noverlay0_desc27 = \"r3,0.6183175020,0.9567600000,radial,0.0663974980,0.0310400000\"\noverlay0_desc27_overlay = r335.png\noverlay0_desc28 = \"analog_left,0.24417,0.8486100000,radial,0.07814,0.03949\"\noverlay0_desc28_overlay = l35.png\noverlay0_desc28_range_mod = 3.0\noverlay0_desc28_saturate_pct = 0.65\noverlay0_desc28_movable = true\noverlay0_desc28_range_mod_exclusive = true\noverlay0_desc29 = \"analog_right,0.74369,0.8486100000,radial,0.07814,0.03949\"\noverlay0_desc29_overlay = r35.png\noverlay0_desc29_range_mod = 3.0\noverlay0_desc29_saturate_pct = 0.65\noverlay0_desc29_movable = true\noverlay0_desc29_range_mod_exclusive = true\noverlay0_desc30 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc30_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24149,0.6625900000,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.6618700000,rect,0.13811,0.03503\"\noverlay1_desc1_next_target = \"psx_phone_portrait_transparent\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.8471100000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7401300000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.7394100000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8471100000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.7394100000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.8471100000,radial,0.07995,0.03543\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 20\noverlay2_desc0 = \"a,0.95536,0.78602,radial,0.03135,0.05344\"\noverlay2_desc0_overlay = circle35.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.8891,0.89278,radial,0.03135,0.05344\"\noverlay2_desc1_overlay = cross-35.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.77722,0.94064,rect,0.02399,0.03503\"\noverlay2_desc2_overlay = start35.png\noverlay2_desc2_exclusive = true\noverlay2_desc3 = \"select,0.22278,0.94064,rect,0.02399,0.03503\"\noverlay2_desc3_overlay = select35.png\noverlay2_desc3_exclusive = true\noverlay2_desc4 = \"l,0.04239,0.06448,rect,0.03135,0.03503\"\noverlay2_desc4_overlay = L135.png\noverlay2_desc5 = \"r,0.95761,0.06448,rect,0.03135,0.03503\"\noverlay2_desc5_overlay = r135.png\noverlay2_desc6 = \"overlay_next,0.19701,0.05712,radial,0.01662,0.02767\"\noverlay2_desc6_overlay = menu35.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.09761,0.79339,radial,0.07921,0.13074\"\noverlay2_desc7_overlay = dpad35.png\noverlay2_desc7_exclusive = true\noverlay2_desc7_reach_x = 1.9\noverlay2_desc7_reach_y = 1.9\noverlay2_desc8 = \"abxy_area,0.88174,0.77866,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"psx_phone_portrait_transparent\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.82284,0.78602,radial,0.03135,0.05344\"\noverlay2_desc11_overlay = square35.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.8891,0.68663,radial,0.03135,0.05344\"\noverlay2_desc12_overlay = triangle35.png\noverlay2_desc12_range_x = 0\noverlay2_desc13 = \"l2,0.11602,0.07184,radial,0.03135,0.04239\"\noverlay2_desc13_overlay = l235.png\noverlay2_desc14 = \"r2,0.88398,0.07184,radial,0.03135,0.04239\"\noverlay2_desc14_overlay = r235.png\noverlay2_desc15 = \"analog_left,0.09761,0.40316,radial,0.03503,0.05712\"\noverlay2_desc15_overlay = l35.png\noverlay2_desc15_range_mod = 7.0\noverlay2_desc15_saturate_pct = 0.65\noverlay2_desc15_movable = true\noverlay2_desc15_range_mod_exclusive = true\noverlay2_desc16 = \"analog_right,0.90239,0.40316,radial,0.03503,0.05712\"\noverlay2_desc16_overlay = r35.png\noverlay2_desc16_range_mod = 7.0\noverlay2_desc16_saturate_pct = 0.65\noverlay2_desc16_movable = true\noverlay2_desc16_range_mod_exclusive = true\noverlay2_desc17 = \"l3,0.03503,0.17492,radial,0.02767,0.04607\"\noverlay2_desc17_overlay = l335.png\noverlay2_desc18 = \"r3,0.96497,0.17492,radial,0.02767,0.04607\"\noverlay2_desc18_overlay = r335.png\noverlay2_desc19 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc19_next_target = \"psx_phone_portrait_transparent\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.0858850000,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1079750000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1116550000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1079750000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9137950000,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8880250000,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8880250000,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8880250000,0.84124,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\""
    },
    {
        "name": "Saturn_Black",
        "path": "extra/Touch-Overlays/Phone-Taller/SATURN/saturn_black.cfg",
        "modes": [
            {
                "name": "Saturn_phone_portrait_black",
                "image": "extra/Touch-Overlays/Phone-Taller/SATURN/saturn_portrait_black.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/SATURN/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/SATURN/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Portrait-stick",
                "image": "extra/Touch-Overlays/Phone-Taller/SATURN/saturn_portrait_black_stick.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 5\noverlay0_name = \"saturn_phone_portrait_black\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = saturn_portrait_black.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 28\noverlay0_desc0 = \"overlay_next,0.1571800000,0.9436400000,radial,0.06535,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"start,0.4720400000,0.9456600000,radial,0.06871,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"l,0.81414,0.69237,rect,0.0630885740,0.02835\"\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"r,0.89756,0.7535987500,rect,0.0649994900,0.0344\"\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"dpad_area,0.2278,0.7943950000,rect,0.20741,0.09296\"\noverlay0_desc4_range_mod = 1.1\noverlay0_desc4_reach_x = 1.9\noverlay0_desc4_reach_y = 1.5\noverlay0_desc4_range_mod_exclusive = true\noverlay0_desc5 = \"up,0.22763,0.7254650000,rect,0.07436,0.01934\"\noverlay0_desc5_reach_x = 0\noverlay0_desc6 = \"up,0.22763,0.7477250000,rect,0.07436,0.04389\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"b,0.6357055360,0.8482599954,rect,0.0724438043,0.0352637546\"\noverlay0_desc7_exclusive = true\noverlay0_desc8 = \"a,0.7623321718,0.8018446147,rect,0.0724438043,0.0352637546\"\noverlay0_desc8_exclusive = true\noverlay0_desc9 = \"up|right,0.37537,0.7312050000,rect,0.05916,0.02614\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"up|left,0.08228,0.7312050000,rect,0.05916,0.02614\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"down|right,0.37537,0.8611650000,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"down|left,0.08228,0.8582950000,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"right,0.33802,0.7900850000,rect,0.09698,0.03426\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down,0.22763,0.8439350000,rect,0.07436,0.04389\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"left,0.12049,0.7943950000,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.2273,0.8640350000,rect,0.07738,0.02251\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.07052,0.7936750000,rect,0.04504,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"right,0.39094,0.7915150000,rect,0.04504,0.03426\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"y,0.54839,0.7878962500,rect,0.0724438043,0.0352637546\"\noverlay0_desc19_exclusive = true\noverlay0_desc20 = \"x,0.67958,0.7315875046,rect,0.0724438043,0.0352637546\"\noverlay0_desc20_exclusive = true\noverlay0_desc21 = \"hold_fast_forward,0.49996,0.5711600000,radial,0.12967,0.02948\"\noverlay0_desc22 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc22_next_target = \"landscape\"\noverlay0_desc23 = \"l2,0.16963,0.5933600000,radial,0.11715,0.02902\"\noverlay0_desc23_exclusive = true\noverlay0_desc24 = \"r2,0.8397,0.5913400000,radial,0.11648,0.02229\"\noverlay0_desc24_exclusive = true\noverlay0_desc25 = \"select,0.89352,0.90765,radial,0.04987,0.01489\"\noverlay0_desc25_overlay = mode-white.png\noverlay0_desc26 = \"overlay_next,0.89151,0.96147,radial,0.07611,0.01489\"\noverlay0_desc26_overlay = analog-white.png\noverlay0_desc26_next_target = \"portrait-stick\"\noverlay0_desc27 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc27_next_target = \"landscape\"\noverlay1_descs = 9\noverlay1_desc0 = \"menu_toggle,0.24149,0.6610700000,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.6603500000,rect,0.12338,0.03871\"\noverlay1_desc1_next_target = \"saturn_phone_portrait_black\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.8455900000,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7386100000,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.7378900000,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.8455900000,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.7378900000,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.8455900000,radial,0.07995,0.03543\"\noverlay1_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay1_desc8_next_target = \"phone_landscape_pause\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 16\noverlay2_desc0 = \"a,0.88174,0.78234,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = b-grey.png\noverlay2_desc1 = \"b,0.805995,0.92223,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = a-grey.png\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = mode-white.png\noverlay2_desc4 = \"l2,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r2,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_exclusive = true\noverlay2_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc8_next_target = \"saturn_phone_portrait_black\"\noverlay2_desc9 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc10 = \"y,0.72344,0.81547,radial,0.04167,0.07407\"\noverlay2_desc10_overlay = x-grey.png\noverlay2_desc10_range_x = 0\noverlay2_desc11 = \"x,0.79395,0.66815,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = y-grey.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"analog_left,0.12051,0.38424,radial,0.05122,0.07611\"\noverlay2_desc12_overlay = landscape_thumbstick.png\noverlay2_desc12_range_mod = 3.0\noverlay2_desc12_saturate_pct = 0.65\noverlay2_desc12_movable = true\noverlay2_desc12_range_mod_exclusive = true\noverlay2_desc13 = \"l,0.85719,0.51947,radial,0.04167,0.07407\"\noverlay2_desc13_overlay = z-grey.png\noverlay2_desc14 = \"r,0.93994,0.62913,radial,0.04167,0.07407\"\noverlay2_desc14_overlay = c-grey.png\noverlay2_desc15 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc15_next_target = \"saturn_phone_portrait_black\"\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 9\noverlay3_desc0 = \"menu_toggle,0.0881850000,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.1102750000,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.1139550000,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.1102750000,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.9097550000,0.0850000000,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8839850000,0.2801100000,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8839850000,0.5672500000,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8839850000,0.8433500000,radial,0.05000,0.08657\"\noverlay3_desc8 = \"overlay_next,-1,-1,radial,0,0\"\noverlay3_desc8_next_target = \"phone_portrait_pause\"\noverlay4_name = \"portrait-stick\"\noverlay4_full_screen = true\noverlay4_normalized = true\noverlay4_aspect_ratio = 0.56236559139784946237\noverlay4_block_x_separation = false\noverlay4_block_y_separation = true\noverlay4_range_mod = 1.5\noverlay4_alpha_mod = 2.0\noverlay4_overlay = saturn_portrait_black_stick.png\noverlay4_descs = 16\noverlay4_desc0 = \"overlay_next,0.1571800000,0.9436400000,radial,0.06535,0.0145\"\noverlay4_desc0_next_target = \"phone_portrait_pause\"\noverlay4_desc0_reach_x = 1.6\noverlay4_desc0_reach_y = 1.6\noverlay4_desc1 = \"start,0.4720400000,0.9456600000,radial,0.06871,0.0145\"\noverlay4_desc1_reach_x = 1.2\noverlay4_desc1_reach_y = 1.6\noverlay4_desc1_exclusive = true\noverlay4_desc2 = \"l,0.81414,0.69102,rect,0.0630885740,0.02835\"\noverlay4_desc2_exclusive = true\noverlay4_desc3 = \"r,0.89756,0.7488887500,rect,0.0649994900,0.0344\"\noverlay4_desc3_exclusive = true\noverlay4_desc4 = \"analog_left,0.2278,0.7795950000,radial,0.11715,0.06266\"\noverlay4_desc4_overlay = portrait_thumbstick.png\noverlay4_desc4_range_mod = 3.0\noverlay4_desc4_saturate_pct = 0.65\noverlay4_desc4_movable = true\noverlay4_desc4_range_mod_exclusive = true\noverlay4_desc5 = \"b,0.6357055360,0.8435499954,rect,0.0724438043,0.0352637546\"\noverlay4_desc5_exclusive = true\noverlay4_desc6 = \"a,0.7623321718,0.7971346147,rect,0.0724438043,0.0352637546\"\noverlay4_desc6_exclusive = true\noverlay4_desc7 = \"y,0.54839,0.7831862500,rect,0.0724438043,0.0352637546\"\noverlay4_desc7_exclusive = true\noverlay4_desc8 = \"x,0.67958,0.7268775046,rect,0.0724438043,0.0352637546\"\noverlay4_desc8_exclusive = true\noverlay4_desc9 = \"hold_fast_forward,0.49996,0.5745300000,radial,0.12967,0.02948\"\noverlay4_desc10 = \"overlay_next,-1,-1,radial,0,0\"\noverlay4_desc10_next_target = \"landscape\"\noverlay4_desc11 = \"l2,0.16963,0.5967300000,radial,0.11715,0.02902\"\noverlay4_desc11_exclusive = true\noverlay4_desc12 = \"r2,0.8397,0.5947100000,radial,0.11648,0.02229\"\noverlay4_desc12_exclusive = true\noverlay4_desc13 = \"select,0.89352,0.90765,radial,0.04987,0.01489\"\noverlay4_desc13_overlay = mode-white.png\noverlay4_desc14 = \"overlay_next,0.89151,0.96147,radial,0.07611,0.01489\"\noverlay4_desc14_overlay = analog-white.png\noverlay4_desc14_next_target = \"saturn_phone_portrait_black\"\noverlay4_desc15 = \"overlay_next,-1,-1,radial,0,0\"\noverlay4_desc15_next_target = \"landscape\""
    },
    {
        "name": "Snes_Phone_Purple",
        "path": "extra/Touch-Overlays/Phone-Taller/SNES/snes_phone_purple.cfg",
        "modes": [
            {
                "name": "Snes_phone_portrait_purple",
                "image": "extra/Touch-Overlays/Phone-Taller/SNES/snes_phone_portrait_purple.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/SNES/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/SNES/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"snes_phone_portrait_purple\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = snes_phone_portrait_purple.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.05691,0.91352,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.41955,0.91065,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.58285,0.91208,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.15144,0.63507,rect,0.15296,0.02012\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.84719,0.63507,rect,0.15296,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.77998,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.22763,0.71105,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22763,0.73331,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.71857,0.78432,rect,0.24118,0.10866\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.0\noverlay0_desc8_reach_y = 1.2\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc8_exclusive = true\noverlay0_desc9 = \"a,0.86066,0.78432,rect,0.08448,0.03782\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.72282,0.85006,rect,0.08448,0.03782\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.37537,0.71679,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.08228,0.71679,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.37537,0.84675,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.08228,0.84388,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.33802,0.77567,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22763,0.82952,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12049,0.77998,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2273,0.84962,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.07052,0.77926,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.7771,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.71539,0.7207,rect,0.08448,0.03782\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.57649,0.78538,rect,0.08448,0.03782\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.49996,0.61917,radial,0.12967,0.02948\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 8\noverlay1_desc0 = \"menu_toggle,0.24149,0.65936,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.65864,rect,0.1022,0.01238\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.84388,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7369,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.73618,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84388,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.73618,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.84388,radial,0.07995,0.03543\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 13\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-grey.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87069,0.91487,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-grey.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.87069,0.78602,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"snes_phone_portrait_purple\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.80075,0.78602,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = y-grey.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.86701,0.66086,radial,0.04167,0.07407\"\noverlay2_desc12_overlay = x-grey.png\noverlay2_desc12_range_x = 0\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 8\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\""
    },
    {
        "name": "Snes_Phone_Transparent",
        "path": "extra/Touch-Overlays/Phone-Taller/SNES/snes_phone_transparent.cfg",
        "modes": [
            {
                "name": "Snes_phone_portrait_transparent",
                "image": "extra/Touch-Overlays/Phone-Taller/SNES/snes_phone_portrait_transparent.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_portrait_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/SNES/phone_portrait_pause.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Phone_landscape_pause",
                "image": "extra/Touch-Overlays/Phone-Taller/SNES/phone_landscape_pause.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\noverlay0_name = \"snes_phone_portrait_transparent\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_aspect_ratio = 0.56236559139784946237\noverlay0_block_x_separation = false\noverlay0_block_y_separation = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 2.0\noverlay0_overlay = snes_phone_portrait_transparent.png\noverlay1_name = \"phone_portrait_pause\"\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_aspect_ratio = 0.56236559139784946237\noverlay1_block_x_separation = false\noverlay1_block_y_separation = true\noverlay1_range_mod = 1.5\noverlay1_alpha_mod = 2.0\noverlay1_overlay = phone_portrait_pause.png\noverlay0_descs = 25\noverlay0_desc0 = \"overlay_next,0.05691,0.91352,radial,0.03146,0.0145\"\noverlay0_desc0_next_target = \"phone_portrait_pause\"\noverlay0_desc0_reach_x = 1.6\noverlay0_desc0_reach_y = 1.6\noverlay0_desc1 = \"select,0.41955,0.91065,radial,0.03146,0.0145\"\noverlay0_desc1_reach_x = 1.2\noverlay0_desc1_reach_y = 1.6\noverlay0_desc1_exclusive = true\noverlay0_desc2 = \"start,0.58285,0.91208,radial,0.03146,0.0145\"\noverlay0_desc2_reach_x = 1.2\noverlay0_desc2_reach_y = 1.6\noverlay0_desc2_exclusive = true\noverlay0_desc3 = \"l,0.15144,0.63507,rect,0.15296,0.02012\"\noverlay0_desc3_reach_x = 1.2\noverlay0_desc3_reach_y = 2.0\noverlay0_desc3_exclusive = true\noverlay0_desc4 = \"r,0.84719,0.63507,rect,0.15296,0.02012\"\noverlay0_desc4_reach_x = 1.2\noverlay0_desc4_reach_y = 2.0\noverlay0_desc4_exclusive = true\noverlay0_desc5 = \"dpad_area,0.2278,0.77998,rect,0.20741,0.09296\"\noverlay0_desc5_range_mod = 1.1\noverlay0_desc5_reach_x = 1.9\noverlay0_desc5_reach_y = 1.5\noverlay0_desc5_range_mod_exclusive = true\noverlay0_desc6 = \"up,0.22763,0.71105,rect,0.07436,0.01934\"\noverlay0_desc6_reach_x = 0\noverlay0_desc7 = \"up,0.22763,0.73331,rect,0.07436,0.04389\"\noverlay0_desc7_reach_x = 0\noverlay0_desc8 = \"abxy_area,0.71857,0.78432,rect,0.24118,0.10866\"\noverlay0_desc8_range_mod = 1.1\noverlay0_desc8_reach_x = 1.0\noverlay0_desc8_reach_y = 1.2\noverlay0_desc8_down = b\noverlay0_desc8_right = a\noverlay0_desc8_up = x\noverlay0_desc8_left = y\noverlay0_desc8_exclusive = true\noverlay0_desc9 = \"a,0.86066,0.78432,rect,0.08448,0.03782\"\noverlay0_desc9_reach_x = 0\noverlay0_desc10 = \"b,0.72282,0.85006,rect,0.08448,0.03782\"\noverlay0_desc10_reach_x = 0\noverlay0_desc11 = \"up|right,0.37537,0.71679,rect,0.05916,0.02614\"\noverlay0_desc11_reach_x = 0\noverlay0_desc12 = \"up|left,0.08228,0.71679,rect,0.05916,0.02614\"\noverlay0_desc12_reach_x = 0\noverlay0_desc13 = \"down|right,0.37537,0.84675,rect,0.05916,0.02614\"\noverlay0_desc13_reach_x = 0\noverlay0_desc14 = \"down|left,0.08228,0.84388,rect,0.05916,0.02614\"\noverlay0_desc14_reach_x = 0\noverlay0_desc15 = \"right,0.33802,0.77567,rect,0.09698,0.03426\"\noverlay0_desc15_reach_x = 0\noverlay0_desc16 = \"down,0.22763,0.82952,rect,0.07436,0.04389\"\noverlay0_desc16_reach_x = 0\noverlay0_desc17 = \"left,0.12049,0.77998,rect,0.09698,0.03426\"\noverlay0_desc17_reach_x = 0\noverlay0_desc18 = \"down,0.2273,0.84962,rect,0.07738,0.02251\"\noverlay0_desc18_reach_x = 0\noverlay0_desc19 = \"left,0.07052,0.77926,rect,0.04504,0.03426\"\noverlay0_desc19_reach_x = 0\noverlay0_desc20 = \"right,0.39094,0.7771,rect,0.04504,0.03426\"\noverlay0_desc20_reach_x = 0\noverlay0_desc21 = \"x,0.71539,0.7207,rect,0.08448,0.03782\"\noverlay0_desc21_reach_x = 0\noverlay0_desc22 = \"y,0.57649,0.78538,rect,0.08448,0.03782\"\noverlay0_desc22_reach_x = 0\noverlay0_desc23 = \"hold_fast_forward,0.49996,0.61917,radial,0.12967,0.02948\"\noverlay0_desc24 = \"overlay_next,-1,-1,radial,0,0\"\noverlay0_desc24_next_target = \"landscape\"\noverlay1_descs = 8\noverlay1_desc0 = \"menu_toggle,0.24149,0.65936,rect,0.20129,0.01605\"\noverlay1_desc0_reach_x = 1.6\noverlay1_desc0_reach_y = 1.6\noverlay1_desc0_exclusive = true\noverlay1_desc1 = \"overlay_next,0.84747,0.65864,rect,0.1022,0.01238\"\noverlay1_desc1_reach_x = 1.6\noverlay1_desc1_reach_y = 1.6\noverlay1_desc2 = \"toggle_fast_forward,0.19052,0.84388,rect,0.08342,0.03995\"\noverlay1_desc2_reach_x = 1.6\noverlay1_desc2_reach_y = 1.6\noverlay1_desc3 = \"load_state,0.50068,0.7369,rect,0.08342,0.03995\"\noverlay1_desc3_reach_x = 1.6\noverlay1_desc3_reach_y = 1.6\noverlay1_desc4 = \"save_state,0.20129,0.73618,rect,0.08342,0.03995\"\noverlay1_desc4_reach_x = 1.6\noverlay1_desc4_reach_y = 1.6\noverlay1_desc5 = \"rewind,0.50068,0.84388,rect,0.08342,0.03995\"\noverlay1_desc5_reach_x = 1.6\noverlay1_desc5_reach_y = 1.6\noverlay1_desc6 = \"reset,0.80977,0.73618,rect,0.08342,0.03995\"\noverlay1_desc6_reach_x = 1.6\noverlay1_desc6_reach_y = 1.6\noverlay1_desc7 = \"close_content,0.80223,0.84388,radial,0.07995,0.03543\"\noverlay2_name = \"landscape\"\noverlay2_full_screen = true\noverlay2_normalized = true\noverlay2_range_mod = 1.5\noverlay2_alpha_mod = 2.0\noverlay2_aspect_ratio = 1.7777778\noverlay2_auto_x_separation = true\noverlay2_auto_y_separation = true\noverlay2_block_x_separation = false\noverlay2_block_y_separation = false\noverlay2_descs = 13\noverlay2_desc0 = \"a,0.93750,0.77778,radial,0.04167,0.07407\"\noverlay2_desc0_overlay = a-grey.png\noverlay2_desc0_reach_x = 0\noverlay2_desc1 = \"b,0.87069,0.91487,radial,0.04167,0.07407\"\noverlay2_desc1_overlay = b-grey.png\noverlay2_desc1_reach_x = 0\noverlay2_desc2 = \"start,0.92816,0.17124,rect,0.03503,0.02399\"\noverlay2_desc2_overlay = start-white.png\noverlay2_desc3 = \"select,0.07184,0.17124,rect,0.03503,0.02399\"\noverlay2_desc3_overlay = select-white.png\noverlay2_desc4 = \"l,0.07921,0.06448,rect,0.06816,0.04239\"\noverlay2_desc4_overlay = l-white.png\noverlay2_desc5 = \"r,0.92079,0.06448,rect,0.06816,0.04239\"\noverlay2_desc5_overlay = r-white.png\noverlay2_desc6 = \"overlay_next,0.20805,0.04976,radial,0.03135,0.02399\"\noverlay2_desc6_overlay = menu-white.png\noverlay2_desc6_next_target = \"phone_landscape_pause\"\noverlay2_desc7 = \"dpad_area,0.12338,0.76762,radial,0.09393,0.16756\"\noverlay2_desc7_overlay = \"d-pad white.png\"\noverlay2_desc7_range_mod_exclusive = true\noverlay2_desc8 = \"abxy_area,0.87069,0.78602,radial,0.12338,0.21542\"\noverlay2_desc8_down = b\noverlay2_desc8_right = a\noverlay2_desc8_up = x\noverlay2_desc8_left = y\noverlay2_desc8_range_mod_exclusive = true\noverlay2_desc9 = \"overlay_next,-1,-1,radial,0,0\"\noverlay2_desc9_next_target = \"snes_phone_portrait_transparent\"\noverlay2_desc10 = \"hold_fast_forward,0.50000,0.10498,radial,0.08289,0.09025\"\noverlay2_desc11 = \"y,0.80075,0.78602,radial,0.04167,0.07407\"\noverlay2_desc11_overlay = y-grey.png\noverlay2_desc11_range_x = 0\noverlay2_desc12 = \"x,0.86701,0.66086,radial,0.04167,0.07407\"\noverlay2_desc12_overlay = x-grey.png\noverlay2_desc12_range_x = 0\noverlay3_name = \"phone_landscape_pause\"\noverlay3_full_screen = true\noverlay3_normalized = true\noverlay3_range_mod = 1.5\noverlay3_alpha_mod = 2.0\noverlay3_aspect_ratio = 1.7777778\noverlay3_auto_x_separation = true\noverlay3_auto_y_separation = true\noverlay3_block_x_separation = false\noverlay3_block_y_separation = false\noverlay3_overlay = phone_landscape_pause.png\noverlay3_descs = 8\noverlay3_desc0 = \"menu_toggle,0.09025,0.07184,radial,0.06816,0.04239\"\noverlay3_desc1 = \"save_state,0.11234,0.27432,radial,0.05000,0.09393\"\noverlay3_desc2 = \"toggle_fast_forward,0.11602,0.56146,radial,0.04976,0.08657\"\noverlay3_desc3 = \"rewind,0.11234,0.84861,radial,0.05000,0.09025\"\noverlay3_desc4 = \"overlay_next,0.91487,0.08289,radial,0.0608,0.05000\"\noverlay3_desc4_next_target = \"landscape\"\noverlay3_desc5 = \"reset,0.8891,0.278,radial,0.04239,0.07184\"\noverlay3_desc6 = \"close_content,0.8891,0.56514,radial,0.04239,0.07552\"\noverlay3_desc7 = \"load_state,0.8891,0.84124,radial,0.05000,0.08657\""
    },
    {
        "name": "720 Med",
        "path": "gamepads/720-med/720-med.cfg",
        "modes": [
            {
                "name": "Landscape",
                "image": "gamepads/720-med/img/720-med.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Menu",
                "image": "gamepads/720-med/img/720-med-menu.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 2\n\noverlay0_name = \"landscape\"\noverlay0_overlay = img/720-med.png\noverlay0_full_screen = true\n\noverlay1_name = \"menu\"\noverlay1_overlay = img/720-med-menu.png\noverlay1_full_screen = true\n\n# landscape\noverlay0_descs = 17\noverlay0_desc0 = \"left,59,576,rect,59,76\"\noverlay0_desc1 = \"right,252,576,rect,59,76\"\noverlay0_desc2 = \"up,159,483,rect,95,61\"\noverlay0_desc3 = \"down,159,668,rect,95,61\"\noverlay0_desc4 = \"l,53,401,rect,48,27\"\noverlay0_desc5 = \"l2,150,405,rect,48,27\"\noverlay0_desc6 = \"r2,1128,407,rect,41,24\"\noverlay0_desc7 = \"r,1222,407,rect,41,24\"\noverlay0_desc8 = \"select,612,700,radial,22,20\"\noverlay0_desc9 = \"start,680,700,radial,22,20\"\noverlay0_desc10 = \"b,1125,662,radial,45,45\"\noverlay0_desc11 = \"a,1042,590,radial,45,45\"\noverlay0_desc12 = \"x,1124,503,radial,45,45\"\noverlay0_desc13 = \"y,1205,580,radial,45,45\"\noverlay0_desc14 = \"rewind,61,31,rect,68,32\"\noverlay0_desc15 = \"toggle_fast_forward,1220,26,rect,68,32\"\noverlay0_desc16 = \"overlay_next,644,25,radial,34,19\"\n\n# menu\noverlay1_descs = 23\noverlay1_desc0 = \"left,59,576,rect,59,76\"\noverlay1_desc1 = \"right,252,576,rect,59,76\"\noverlay1_desc2 = \"up,159,483,rect,95,61\"\noverlay1_desc3 = \"down,159,668,rect,95,61\"\noverlay1_desc4 = \"l,53,401,rect,48,27\"\noverlay1_desc5 = \"l2,150,405,rect,48,27\"\noverlay1_desc6 = \"r2,1128,407,rect,41,24\"\noverlay1_desc7 = \"r,1222,407,rect,41,24\"\noverlay1_desc8 = \"select,612,700,radial,22,20\"\noverlay1_desc9 = \"start,680,700,radial,22,20\"\noverlay1_desc10 = \"b,1125,662,radial,45,45\"\noverlay1_desc11 = \"a,1042,590,radial,45,45\"\noverlay1_desc12 = \"x,1124,503,radial,45,45\"\noverlay1_desc13 = \"y,1205,580,radial,45,45\"\noverlay1_desc14 = \"rewind,61,31,rect,68,32\"\noverlay1_desc15 = \"toggle_fast_foward,1220,26,rect,68,32\"\noverlay1_desc16 = \"overlay_next,644,25,radial,34,19\"\noverlay1_desc17 = \"load_state,189,29,rect,65,32\"\noverlay1_desc18 = \"save_state,316,29,rect,65,32\"\noverlay1_desc19 = \"reset,450,29,rect,65,32\"\noverlay1_desc20 = \"state_slot_increase,836,29,rect,65,32\"\noverlay1_desc21 = \"state_slot_decrease,963,29,rect,65,32\"\noverlay1_desc22 = \"toggle_slowmotion,1092,29,rect,65,32\""
    },
    {
        "name": "6 Button Fighter",
        "path": "gamepads/arcade-anim/6-button-fighter.cfg",
        "modes": [
            {
                "name": "6-button-fighter",
                "image": "gamepads/arcade-anim/img/6-button-fighter.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 1\n\noverlay0_name = \"6-button-fighter\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 0.0001\noverlay0_overlay = img/6-button-fighter.png\n\n# 6-button-fighter\noverlay0_descs = 21\noverlay0_desc0 = \"left,0.05,0.835,rect,0.035,0.05\"\noverlay0_desc0_overlay = img/left.png\noverlay0_desc1 = \"right,0.137,0.8375,rect,0.035,0.05\"\noverlay0_desc1_overlay = img/right.png\noverlay0_desc2 = \"up,0.093,0.76,rect,0.027,0.06\"\noverlay0_desc2_overlay = img/up.png\noverlay0_desc3 = \"down,0.0925,0.914,rect,0.027,0.06\"\noverlay0_desc3_overlay = img/down.png\noverlay0_desc4 = \"start,0.955,0.0631,radial,0.03475,0.051\"\noverlay0_desc4_overlay = img/unpressed-p1.png\noverlay0_desc6 = \"r,0.9492,0.823,radial,0.03475,0.051\"\noverlay0_desc6_overlay = img/unpressed-r.png\noverlay0_desc5 = \"l,0.9205,0.735,radial,0.03475,0.051\"\noverlay0_desc5_overlay = img/unpressed-r.png\noverlay0_desc9 = \"b,0.8372,0.9185,radial,0.03475,0.051\"\noverlay0_desc9_overlay = img/unpressed-r.png\noverlay0_desc8 = \"y,0.8095,0.829,radial,0.03475,0.051\"\noverlay0_desc8_overlay = img/unpressed-r.png\noverlay0_desc7 = \"x,0.852,0.75,radial,0.03475,0.051\"\noverlay0_desc7_overlay = img/unpressed-r.png\noverlay0_desc10 = \"a,0.88,0.84,radial,0.03475,0.051\"\noverlay0_desc10_overlay = img/unpressed-r.png\noverlay0_desc11 = \"nul,0.48,0.95833333333,radial,0.025,0.04166666667\"\n//overlay0_desc11_overlay = img/next.png\noverlay0_desc12 = \"nul,0.04375,0.9270833333333,radial,0.03125,0.0520833333333\"\noverlay0_desc13 = \"nul,0.19375,0.67708333333,radial,0.03125,0.0520833333333\"\noverlay0_desc14 = \"nul,0.04375,0.67708333333,radial,0.03125,0.0520833333333\"\noverlay0_desc15 = \"nul,0.19375,0.9270833333333,radial,0.03125,0.0520833333333\"\noverlay0_desc16 = \"nul,0.11845,0.8021,radial,0.127575,0.212625\"\n//overlay0_desc16_overlay = img/analog-background.png\noverlay0_desc17 = \"nul,0.5,0.1,radial,0.025,0.04166666666\"\n//overlay0_desc17_overlay = img/rgui.png\noverlay0_desc18 = \"nul,0.3,0.1,radial,0.025,0.04166666666\"\n//overlay0_desc18_overlay = img/rotate.png\noverlay0_desc19 = \"nul,0.7,0.1,radial,0.025,0.04166666666\"\n//overlay0_desc19_overlay = img/4button.png\noverlay0_desc20 = \"select,0.0375,0.075,rect,0.025,0.055\"\noverlay0_desc20_overlay = img/coin.png\noverlay0_desc21 = \"analog_left,0.095,0.84,radial,0.05,0.085\"\noverlay0_desc21_alpha_mod = 1.0\noverlay0_desc21_overlay = img/balltop.png\noverlay0_desc21_pct = 0.75\noverlay0_desc21_movable = true"
    },
    {
        "name": "Neogeo",
        "path": "gamepads/arcade-anim/neogeo.cfg",
        "modes": [
            {
                "name": "Neogeo",
                "image": "gamepads/arcade-anim/img/neogeo.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 1\n\noverlay0_name = \"neogeo\"\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 0.0001\noverlay0_overlay = img/neogeo.png\n\n# neogeo\noverlay0_descs = 21\noverlay0_desc0 = \"left,0.05,0.835,rect,0.035,0.05\"\noverlay0_desc0_overlay = img/left.png\noverlay0_desc1 = \"right,0.137,0.8375,rect,0.035,0.05\"\noverlay0_desc1_overlay = img/right.png\noverlay0_desc2 = \"up,0.093,0.76,rect,0.027,0.06\"\noverlay0_desc2_overlay = img/up.png\noverlay0_desc3 = \"down,0.0925,0.914,rect,0.027,0.06\"\noverlay0_desc3_overlay = img/down.png\noverlay0_desc4 = \"start,0.955,0.0631,radial,0.03475,0.051\"\noverlay0_desc4_overlay = img/unpressed-p1.png\noverlay0_desc6 = \"null,0.9492,0.823,radial,0.03475,0.051\"\noverlay0_desc5 = \"l,0.898,0.765,radial,0.03475,0.051\"\noverlay0_desc5_overlay = img/unpressed-g.png\noverlay0_desc7 = \"b,0.96,0.722,radial,0.03475,0.051\"\noverlay0_desc7_overlay = img/unpressed-b.png\noverlay0_desc9 = \"y,0.8385,0.941,radial,0.03475,0.051\"\noverlay0_desc9_overlay = img/unpressed-r.png\noverlay0_desc8 = \"x,0.855,0.845,radial,0.03475,0.051\"\noverlay0_desc8_overlay = img/unpressed-y.png\noverlay0_desc10 = \"null,0.88,0.84,radial,0.03475,0.051\"\noverlay0_desc11 = \"nul,0.48,0.95833333333,radial,0.025,0.04166666667\"\n//overlay0_desc11_overlay = img/next.png\noverlay0_desc12 = \"nul,0.04375,0.9270833333333,radial,0.03125,0.0520833333333\"\noverlay0_desc13 = \"nul,0.19375,0.67708333333,radial,0.03125,0.0520833333333\"\noverlay0_desc14 = \"nul,0.04375,0.67708333333,radial,0.03125,0.0520833333333\"\noverlay0_desc15 = \"nul,0.19375,0.9270833333333,radial,0.03125,0.0520833333333\"\noverlay0_desc16 = \"nul,0.11845,0.8021,radial,0.127575,0.212625\"\n//overlay0_desc16_overlay = img/analog-background.png\noverlay0_desc17 = \"nul,0.5,0.1,radial,0.025,0.04166666666\"\n//overlay0_desc17_overlay = img/rgui.png\noverlay0_desc18 = \"nul,0.3,0.1,radial,0.025,0.04166666666\"\n//overlay0_desc18_overlay = img/rotate.png\noverlay0_desc19 = \"nul,0.7,0.1,radial,0.025,0.04166666666\"\n//overlay0_desc19_overlay = img/4button.png\noverlay0_desc20 = \"select,0.0375,0.075,rect,0.025,0.055\"\noverlay0_desc20_overlay = img/coin.png\noverlay0_desc21 = \"analog_left,0.095,0.84,radial,0.05,0.085\"\noverlay0_desc21_alpha_mod = 1.0\noverlay0_desc21_overlay = img/balltop.png\noverlay0_desc21_pct = 0.75\noverlay0_desc21_movable = true"
    },
    {
        "name": "Cdi",
        "path": "gamepads/cdi_anim_portrait/cdi.cfg",
        "modes": [
            {
                "name": "Cdi-portrait",
                "image": "gamepads/cdi_anim_portrait/img/Background.png",
                "orientation": "portrait",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = \"1\"\n\noverlay0_name = \"cdi-portrait\"\noverlay0_full_screen = \"true\"\noverlay0_normalized = \"true\"\noverlay0_overlay = img/Background.png\noverlay0_alpha_mod = 0,00\noverlay0_aspect_ratio = 0.5625\n\n# cdi portrait\noverlay0_descs = 14\noverlay0_desc0 = \"menu_toggle,0.664,0.93758,radial,0.13508,0.045\"\noverlay0_desc0_overlay = img/Menu.png\noverlay0_desc1 = \"hold_fast_forward,0.33,0.93758,radial,0.13508,0.045\"\noverlay0_desc1_overlay = img/Speed.png\noverlay0_desc2 = \"up,0.2384,0.6515,radial,0.075,0.0405\"\noverlay0_desc2_overlay = img/Up.png\noverlay0_desc3 = \"down,0.24173,0.786,radial,0.075,0.0405\"\noverlay0_desc3_overlay = img/Down.png\noverlay0_desc4 = \"right,0.3587,0.71799,radial,0.071,0.0419\"\noverlay0_desc4_overlay = img/Right.png\noverlay0_desc5 = \"left,0.12,0.7195,radial,0.0723,0.0417\"\noverlay0_desc5_overlay = img/Left.png\noverlay0_desc6 = \"x,0.5922,0.7256,radial,0.082,0.0465\"\noverlay0_desc6_overlay = img/X.png\noverlay0_desc7 = \"retrok_tab,0.75317,0.64902,radial,0.0819,0.0465\"\noverlay0_desc7_overlay = img/A_B_Tab.png\noverlay0_desc8 = \"a,0.7505,0.8,radial,0.0819,0.0465\"\noverlay0_desc8_overlay = img/A_B_Tab.png\noverlay0_desc9 = \"b,0.91241,0.72415,rect,0.0819,0.0465\"\noverlay0_desc9_overlay = img/A_B_Tab.png\noverlay0_desc10 = \"right|up,0.36842,0.64451,radial,0.05249,0.02819\"\noverlay0_desc11 = \"left|up,0.09685,0.64451,radial,0.05249,0.02819\"\noverlay0_desc12 = \"right|down,0.3871,0.78815,radial,0.05249,0.02819\"\noverlay0_desc13 = \"left|down,0.09685,0.78815,radial,0.05249,0.02819\""
    },
    {
        "name": "Flat Base",
        "path": "gamepads/flat/old/flat-base.cfg",
        "modes": [
            {
                "name": "Ztestld",
                "image": "gamepads/flat/old/zbaseld.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Ztestla",
                "image": "gamepads/flat/old/zbasela.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 2\n\n\noverlay0_overlay = zbaseld.png\noverlay0_full_screen = true\noverlay0_name = \"ztestld\"\n\noverlay1_overlay = zbasela.png\noverlay1_full_screen = true\noverlay1_name = \"ztestla\"\n\n\noverlay0_descs = 23\n\noverlay0_desc0 = \"left,64,484,rect,64,50\"\noverlay0_desc1 = \"right,259,484,rect,79,50\"\noverlay0_desc2 = \"up,151,377,rect,51,57\"\noverlay0_desc3 = \"down,151,584,rect,51,57\"\noverlay0_desc4 = \"start,1036,40,rect,100,40\"\noverlay0_desc5 = \"select,100,40,rect,100,40\"\noverlay0_desc6 = \"b,950,570,radial,76,76\"\noverlay0_desc7 = \"a,1070,466,radial,76,76\"\noverlay0_desc8 = \"y,828,466,radial,76,76\"\noverlay0_desc9 = \"x,950,366,radial,76,76\"\noverlay0_desc10 = \"l,705,600,rect,84,42\"\noverlay0_desc11 = \"r,1091,237,rect,45,90\"\noverlay0_desc12 = \"l,45,217,rect,45,70\"\noverlay0_desc13 = \"left|down,51,587,rect,53,58\"\noverlay0_desc14 = \"right|up,266,378,rect,66,58\"\noverlay0_desc15 = \"up|left,51,378,rect,53,58\"\noverlay0_desc16 = \"down|right,266,587,rect,66,58\"\noverlay0_desc17 = \"y|b,828,570,rect,64,64\"\noverlay0_desc18 = \"x|a,1070,366,rect,64,64\"\noverlay0_desc19 = \"y|x,828,366,rect,64,64\"\noverlay0_desc20 = \"a|b,1076,570,rect,64,64\"\noverlay0_desc21 = \"overlay_next,260,40,rect,100,40\"\noverlay0_desc21_next_target = \"ztestla\"\noverlay0_desc22 = \"menu_toggle,870,40,rect,100,40\"\n\n\noverlay1_descs = 16\n\noverlay1_desc0 = \"analog_left,160,482,radial,90,90\"\noverlay1_desc0_overlay = znub1.png\noverlay1_desc0_range_mod = 3.5\noverlay1_desc0_pct = 0.75\noverlay1_desc0_movable = true\noverlay1_desc1 = \"start,1036,40,rect,100,40\"\noverlay1_desc2 = \"select,100,40,rect,100,40\"\noverlay1_desc3 = \"b,950,570,radial,76,76\"\noverlay1_desc4 = \"a,1070,466,radial,76,76\"\noverlay1_desc5 = \"y,828,466,radial,76,76\"\noverlay1_desc6 = \"x,950,366,radial,76,76\"\noverlay1_desc7 = \"l,705,600,rect,84,42\"\noverlay1_desc8 = \"r,1091,237,rect,45,90\"\noverlay1_desc9 = \"l,45,217,rect,45,70\"\noverlay1_desc10 = \"y|b,828,570,rect,64,64\"\noverlay1_desc11 = \"x|a,1070,366,rect,64,64\"\noverlay1_desc12 = \"y|x,828,366,rect,64,64\"\noverlay1_desc13 = \"a|b,1076,570,rect,64,64\"\noverlay1_desc14 = \"overlay_next,260,40,rect,100,40\"\noverlay1_desc14_next_target = \"ztestld\"\noverlay1_desc15 = \"menu_toggle,870,40,rect,100,40\""
    },
    {
        "name": "Flat Gb Wip",
        "path": "gamepads/flat/old/flat-gb-wip.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/flat/old/zgbpd.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 1\n\noverlay0_overlay = zgbpd.png\n\noverlay0_full_screen = true\n\noverlay0_descs = 15\noverlay0_desc0 = \"left,62,820,rect,62,51\"\noverlay0_desc1 = \"right,244,820,rect,67,51\"\noverlay0_desc2 = \"up,147,719,rect,45,51\"\noverlay0_desc3 = \"down,147,920,rect,45,51\"\noverlay0_desc4 = \"start,446,1060,rect,54,50\"\noverlay0_desc5 = \"select,183,1060,rect,54,50\"\noverlay0_desc6 = \"b,454,929,rect,51,51\"\noverlay0_desc7 = \"a,575,821,rect,51,51\"\noverlay0_desc8 = \"l,394,640,rect,50,50\"\noverlay0_desc9 = \"r,571,640,rect,50,50\"\noverlay0_desc10 = \"left|down,51,920,rect,51,51\"\noverlay0_desc11 = \"right|up,246,719,rect,54,51\"\noverlay0_desc12 = \"up|left,51,719,rect,51,51\"\noverlay0_desc13 = \"down|right,246,920,rect,54,51\"\noverlay0_desc14 = \"b|a,481,832,rect,51,51\"\n"
    },
    {
        "name": "Flat N64",
        "path": "gamepads/flat/old/flat-n64.cfg",
        "modes": [
            {
                "name": "Flat64d",
                "image": "gamepads/flat/old/zn64ld.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Flat64a",
                "image": "gamepads/flat/old/zn64la.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 2\n\n\noverlay0_overlay = zn64ld.png\noverlay0_full_screen = true\noverlay0_name = \"flat64d\"\n\noverlay1_overlay = zn64la.png\noverlay1_full_screen = true\noverlay1_name = \"flat64a\"\n\n\noverlay0_descs = 21\n\noverlay0_desc0 = \"left,64,484,rect,64,50\"\noverlay0_desc1 = \"right,259,484,rect,79,50\"\noverlay0_desc2 = \"up,151,377,rect,51,57\"\noverlay0_desc3 = \"down,151,584,rect,51,57\"\noverlay0_desc4 = \"start,1036,40,rect,100,40\"\noverlay0_desc5 = \"select,100,40,rect,100,40\"\noverlay0_desc6 = \"b,950,570,radial,80,80\"\noverlay0_desc7 = \"a,1070,466,radial,80,80\"\noverlay0_desc8 = \"r2|b,828,466,radial,76,76\"\noverlay0_desc9 = \"r2|a,950,366,radial,76,76\"\noverlay0_desc10 = \"r2|y,779,317,radial,76,76\"\noverlay0_desc11 = \"r2|x,901,215,radial,76,76\"\noverlay0_desc12 = \"l,705,600,rect,84,42\"\noverlay0_desc13 = \"r,1091,237,rect,45,90\"\noverlay0_desc14 = \"l,45,217,rect,45,70\"\noverlay0_desc15 = \"left|down,51,587,rect,53,58\"\noverlay0_desc16 = \"right|up,266,378,rect,66,58\"\noverlay0_desc17 = \"up|left,51,378,rect,53,58\"\noverlay0_desc18 = \"down|right,266,587,rect,66,58\"\noverlay0_desc19 = \"overlay_next,260,40,rect,100,40\"\noverlay0_desc19_next_target = \"flat64a\"\noverlay0_desc20 = \"menu_toggle,870,40,rect,100,40\"\n\n\noverlay1_descs = 14\n\noverlay1_desc0 = \"analog_left,160,482,radial,90,90\"\noverlay1_desc0_overlay = znub2.png\noverlay1_desc0_range_mod = 3.5\noverlay1_desc0_pct = 0.75\noverlay1_desc0_movable = true\noverlay1_desc1 = \"start,1036,40,rect,100,40\"\noverlay1_desc2 = \"select,100,40,rect,100,40\"\noverlay1_desc3 = \"b,950,570,radial,80,80\"\noverlay1_desc4 = \"a,1070,466,radial,80,80\"\noverlay1_desc5 = \"r2|b,828,466,radial,76,76\"\noverlay1_desc6 = \"r2|a,950,366,radial,76,76\"\noverlay1_desc7 = \"r2|y,779,317,radial,76,76\"\noverlay1_desc8 = \"r2|x,901,215,radial,76,76\"\noverlay1_desc9 = \"l2,705,600,rect,84,42\"\noverlay1_desc10 = \"r,1091,237,rect,45,90\"\noverlay1_desc11 = \"l,45,217,rect,45,70\"\noverlay1_desc12 = \"overlay_next,260,40,rect,100,40\"\noverlay1_desc12_next_target = \"flat64d\"\noverlay1_desc13 = \"menu_toggle,870,40,rect,100,40\"\n\n\n"
    },
    {
        "name": "Flat Ws",
        "path": "gamepads/flat/old/flat-ws.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/flat/old/zws.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 1\n\noverlay0_overlay = zws.png\n\noverlay0_full_screen = true\n\noverlay0_descs = 12\noverlay0_desc0 = \"left,53,503,rect,63,45\"\noverlay0_desc1 = \"right,204,503,rect,63,45\"\noverlay0_desc2 = \"up,132,426,rect,45,63\"\noverlay0_desc3 = \"down,132,587,rect,45,63\"\noverlay0_desc4 = \"start,611,607,rect,50,33\"\noverlay0_desc5 = \"select,436,607,rect,50,33\"\noverlay0_desc6 = \"b,946,572,rect,64,64\"\noverlay0_desc7 = \"a,1066,470,radial,64,64\"\noverlay0_desc8 = \"l,53,140,rect,63,45\"\noverlay0_desc9 = \"r,204,140,rect,63,45\"\noverlay0_desc10 = \"r2,132,63,rect,45,63\"\noverlay0_desc11 = \"l2,132,224,rect,45,63\""
    },
    {
        "name": "Flip_Phone",
        "path": "gamepads/flip_phone/flip_phone.cfg",
        "modes": [
            {
                "name": "Flip_phone_portrait",
                "image": "gamepads/flip_phone/img/lines_anim.png",
                "orientation": "portrait",
                "viewport": {
                    "x": 0.5,
                    "y": 0.32,
                    "w": 0.8,
                    "h": 0.45
                }
            }
        ],
        "content": "overlays = 1\n\noverlay0_name = flip_phone_portrait\noverlay0_overlay = img/lines_anim.png\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_range_mode = 1.0\noverlay0_alpha_mod = 0.001\n\n# flip_phone_portrait\nviewport_x = 0.5\nviewport_y = 0.32\nviewport_width = 0.8\nviewport_height = 0.45\n\noverlay0_descs = 15\n\noverlay0_desc0 = \"select,0.25,0.625,rect,0.125,0.039\"\noverlay0_desc0_overlay = img/soft1.png\noverlay0_desc1 = \"start,0.75,0.625,rect,0.125,0.039\"\noverlay0_desc1_overlay = img/soft2.png\noverlay0_desc2 = \"x,0.25,0.7,rect,0.125,0.039\"\noverlay0_desc2_overlay = img/1.png\noverlay0_desc3 = \"left,0.25,0.775,rect,0.125,0.039\"\noverlay0_desc3_overlay = img/4.png\noverlay0_desc4 = \"y,0.25,0.85,rect,0.125,0.039\"\noverlay0_desc4_overlay = img/7.png\noverlay0_desc5 = \"l,0.25,0.925,rect,0.125,0.039\"\noverlay0_desc5_overlay = img/star.png\noverlay0_desc6 = \"up,0.5,0.7,rect,0.125,0.039\"\noverlay0_desc6_overlay = img/2.png\noverlay0_desc7 = \"l2,0.5,0.775,rect,0.125,0.039\"\noverlay0_desc7_overlay = img/5.png\noverlay0_desc8 = \"down,0.5,0.85,rect,0.125,0.039\"\noverlay0_desc8_overlay = img/8.png\noverlay0_desc9 = \"r2,0.5,0.925,rect,0.125,0.039\"\noverlay0_desc9_overlay = img/0.png\noverlay0_desc10 = \"a,0.75,0.7,rect,0.125,0.039\"\noverlay0_desc10_overlay = img/3.png\noverlay0_desc11 = \"right,0.75,0.775,rect,0.125,0.039\"\noverlay0_desc11_overlay = img/6.png\noverlay0_desc12 = \"b,0.75,0.85,rect,0.125,0.039\"\noverlay0_desc12_overlay = img/9.png\noverlay0_desc13 = \"r,0.75,0.925,rect,0.125,0.039\"\noverlay0_desc13_overlay = img/pound.png\noverlay0_desc14 = \"menu_toggle,0.5,0.625,rect,0.125,0.039\"\noverlay0_desc14_overlay = img/invader.png"
    },
    {
        "name": "Gba Control Purple",
        "path": "gamepads/gba-anim_landscape/gba-control-purple.cfg",
        "modes": [
            {
                "name": "Gba_control",
                "image": "gamepads/gba-anim_landscape/img/gba-control-purple.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "// Animated GBA Landscape by hunterk\n// On a 1080p screen, use 4x integer scaling\n\noverlays = 1\n\noverlay0_name = \"gba_control\"\noverlay0_overlay = img/gba-control-purple.png\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_range_mod = 1.5\noverlay0_alpha_mod = 0.0001\n\n# gba_control\noverlay0_descs = 30\n\noverlay0_desc0 = \"l,0.125,0.0475,rect,0.125,0.085\"\noverlay0_desc0_overlay = img/l.png\noverlay0_desc1 = \"r,0.88,0.070,rect,0.12,0.085\"\noverlay0_desc1_overlay = img/r.png\noverlay0_desc2 = \"left,0.016,0.442,rect,0.035,0.062\" \noverlay0_desc2_overlay = img/left.png\noverlay0_desc3 = \"right,0.14,0.445,rect,0.035,0.0625\"\noverlay0_desc3_overlay = img/right.png\noverlay0_desc4 = \"up,0.077,0.34,rect,0.035,0.061\"\noverlay0_desc4_overlay = img/up.png\noverlay0_desc5 = \"down,0.07525,0.56,rect,0.035,0.061\"\noverlay0_desc5_overlay = img/down.png\noverlay0_desc6 = \"start,0.154,0.735,rect,0.021,0.0375\"\noverlay0_desc6_overlay = img/start.png\noverlay0_desc7 = \"select,0.152,0.849,rect,0.021,0.0375\"\noverlay0_desc7_overlay = img/start.png\noverlay0_desc8 = \"a,0.96,0.425,radial,0.04,0.075\"\noverlay0_desc8_overlay = img/a.png\noverlay0_desc9 = \"b,0.86,0.485,radial,0.04,0.075\"\noverlay0_desc9_overlay = img/b.png\noverlay0_desc10 = \"menu_toggle,0.5,0.89,radial,0.05,0.085\"\noverlay0_desc11 = \"l,0.09,0.06,rect,0.11,0.08\"\noverlay0_desc12 = \"r,0.92,0.06,rect,0.11,0.08\"\noverlay0_desc13 = \"b,0.85,0.485,radial,0.05,0.085\"\noverlay0_desc14 = \"a,0.95,0.425,radial,0.05,0.085\"\noverlay0_desc15 = \"b|a,0.9,0.45,rect,0.02,0.085\"\noverlay0_desc16 = \"start,0.16,0.725,rect,0.03,0.05\"\noverlay0_desc17 = \"select,0.16,0.83,rect,0.03,0.05\"\noverlay0_desc18 = \"left,0.02,0.46,rect,0.03,0.05\" // bigger button further from center\noverlay0_desc19 = \"right,0.165,0.46,rect,0.03,0.05\" // bigger button further from center\noverlay0_desc20 = \"left,0.04,0.46,rect,0.02,0.05\" // smaller button closer to center\noverlay0_desc21 = \"right,0.13,0.46,rect,0.02,0.05\" // smaller button closer to center\noverlay0_desc22 = \"up,0.09,0.325,rect,0.03,0.05\" // bigger button further from center\noverlay0_desc23 = \"down,0.09,0.6,rect,0.03,0.05\" // bigger button further from center\noverlay0_desc24 = \"up,0.09,0.38,rect,0.03,0.03\" // smaller button closer to center\noverlay0_desc25 = \"down,0.09,0.53,rect,0.03,0.03\" // smaller button closer to center\noverlay0_desc26 = \"up|left,0.01,0.325,rect,0.03,0.05\"\noverlay0_desc27 = \"up|right,0.165,0.325,rect,0.03,0.05\"\noverlay0_desc28 = \"down|left,0.01,0.6,rect,0.03,0.05\"\noverlay0_desc29 = \"down|right,0.165,0.6,rect,0.03,0.05\""
    },
    {
        "name": "Arctic",
        "path": "gamepads/gba_landscape_6x/arctic.cfg",
        "modes": [
            {
                "name": "Landscape",
                "image": "gamepads/gba_landscape_6x/img/background_arctic.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "// GBA Landscape\n// iPhone 14 Pro Max\n// Use 6x scaling\n\noverlays = 1\n\noverlay0_name = \"landscape\"\noverlay0_overlay = img/background_arctic.png\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_range_mod = 1.0\noverlay0_alpha_mod = 0.0001\noverlay0_descs = 49\n\n# Decoration Bezel\noverlay0_desc0 = \"null,0.5,0.523255,rect,0.304005,0.465116\"\noverlay0_desc0_overlay = img/bezel_default.png\noverlay0_desc0_reach_x = 0\n\n# Decoration Bevel\noverlay0_desc1 = \"null,0.5,0.926356,rect,0.5,0.073643\"\noverlay0_desc1_overlay = img/decoration_bevel.png\noverlay0_desc1_reach_x = 0\n\n# Decoration Speaker\noverlay0_desc2 = \"null,0.901287,0.806201,rect,0.054542,0.102325\"\noverlay0_desc2_overlay = img/decoration_speaker.png\noverlay0_desc2_reach_x = 0\n\n# Decoration Power\noverlay0_desc3 = \"null,0.912017,0.193798,rect,0.045958,0.024031\"\noverlay0_desc3_overlay = img/decoration_power.png\noverlay0_desc3_reach_x = 0\n\n# Shoulder Buttons [Background]\noverlay0_desc4 = \"null,0.5,0.093023,rect,0.5,0.093023\"\noverlay0_desc4_overlay = img/decoration_shoulders.png\noverlay0_desc4_reach_x = 0\n\n# Left Shoulder Button [Pressed]\noverlay0_desc5 = \"null,0.112660,0.081395,rect,0.112660,0.081395\"\noverlay0_desc5_overlay = img/shoulder_left_pressed.png\noverlay0_desc5_reach_x = 0\n\n# Left Shoulder Button\noverlay0_desc6 = \"l,0.112660,0.081395,rect,0.112660,0.081395\"\noverlay0_desc6_overlay = img/shoulder_left.png\n\n# Right Shoulder Button [Pressed]\noverlay0_desc7 = \"null,0.887340,0.081395,rect,0.112660,0.081395\"\noverlay0_desc7_overlay = img/shoulder_right_pressed.png\noverlay0_desc7_reach_x = 0\n\n# Right Shoulder Button\noverlay0_desc8 = \"r,0.887340,0.081395,rect,0.112660,0.081395\"\noverlay0_desc8_overlay = img/shoulder_right.png\n\n# A Button [Background]\noverlay0_desc9 = \"null,0.904864,0.379844,radial,0.037553,0.081395\"\noverlay0_desc9_overlay = img/decoration_button.png\noverlay0_desc9_reach_x = 0\n\n# A Button [Pressed]\noverlay0_desc10 = \"null,0.904864,0.379844,radial,0.032188,0.069767\"\noverlay0_desc10_overlay = img/button_a_pressed.png\noverlay0_desc10_reach_x = 0\n\n# A Button\noverlay0_desc11 = \"a,0.904864,0.379844,radial,0.032188,0.069767\"\noverlay0_desc11_overlay = img/button_a.png\noverlay0_desc11_range_mod = 1.25\noverlay0_desc11_reach_x = 2.0\noverlay0_desc11_reach_y = 2.0\n\n# B Button [Background]\noverlay0_desc12 = \"null,0.822603,0.542635,radial,0.037553,0.081395\"\noverlay0_desc12_overlay = img/decoration_button.png\noverlay0_desc12_reach_x = 0\n\n# B Button [Pressed]\noverlay0_desc13 = \"null,0.822603,0.542635,radial,0.032188,0.069767\"\noverlay0_desc13_overlay = img/button_b_pressed.png\noverlay0_desc13_reach_x = 0\n\n# B Button\noverlay0_desc14 = \"b,0.822603,0.542635,radial,0.032188,0.069767\"\noverlay0_desc14_overlay = img/button_b.png\noverlay0_desc14_range_mod = 1.25\noverlay0_desc14_reach_x = 2.0\noverlay0_desc14_reach_y = 2.0\n\n# Start Button [Background]\noverlay0_desc15 = \"null,0.098354,0.740310,rect,0.067060,0.063953\"\noverlay0_desc15_overlay = img/decoration_start.png\noverlay0_desc15_reach_x = 0\n\n# Start Button [Pressed]\noverlay0_desc16 = \"null,0.143061,0.758139,rect,0.016094,0.034883\"\noverlay0_desc16_overlay = img/button_start_pressed.png\noverlay0_desc16_reach_x = 0\n\n# Start Button\noverlay0_desc17 = \"start,0.143061,0.758139,rect,0.016094,0.034883\"\noverlay0_desc17_overlay = img/button_start.png\noverlay0_desc17_reach_left = 7.0\noverlay0_desc17_reach_right = 2.0\noverlay0_desc17_reach_y = 2.0\n\n# Select Button [Background]\noverlay0_desc18 = \"null,0.098354,0.872093,rect,0.067060,0.063953\"\noverlay0_desc18_overlay = img/decoration_select.png\noverlay0_desc18_reach_x = 0\n\n# Select Button [Pressed]\noverlay0_desc19 = \"null,0.143061,0.889922,rect,0.016094,0.034883\"\noverlay0_desc19_overlay = img/button_select_pressed.png\noverlay0_desc19_reach_x = 0\n\n# Select Button\noverlay0_desc20 = \"select,0.143061,0.889922,rect,0.016094,0.034883\"\noverlay0_desc20_overlay = img/button_select.png\noverlay0_desc20_reach_left = 7.0\noverlay0_desc20_reach_right = 2.0\noverlay0_desc20_reach_y = 2.0\n\n# Directional Pad [Background]\noverlay0_desc21 = \"null,0.139484,0.434108,rect,0.080472,0.174418\"\noverlay0_desc21_overlay = img/decoration_dpad_background.png\noverlay0_desc21_reach_x = 0\n\n# Directional Pad [Centre]\noverlay0_desc22 = \"null,0.139484,0.434108,rect,0.075107,0.162790\"\noverlay0_desc22_overlay = img/decoration_dpad_light.png\noverlay0_desc22_reach_x = 0\n\n# Directional Up [Pressed]\noverlay0_desc23 = \"null,0.139484,0.344961,rect,0.025035,0.073643\"\noverlay0_desc23_overlay = img/direction_up_pressed.png\noverlay0_desc23_reach_x = 0\n\n# Directional Up\noverlay0_desc24 = \"up,0.139484,0.344961,rect,0.025035,0.073643\"\noverlay0_desc24_overlay = img/direction_up.png\noverlay0_desc24_reach_x = 0\n\n# Directional Up [Button Hitbox]\noverlay0_desc25 = \"up,0.139484,0.325581,rect,0.025035,0.054263\"\noverlay0_desc25_range_mod = 1.5\noverlay0_desc25_reach_x = 2.0\noverlay0_desc25_reach_up = 1.5\n\n# Directional Up [Centre Hitbox]\noverlay0_desc26 = \"up,0.139484,0.379844,rect,0.012517,0.027131\"\noverlay0_desc26_range_mod = 1.5\n\n# Directional Down [Pressed]\noverlay0_desc27 = \"null,0.139484,0.523255,rect,0.025035,0.073643\"\noverlay0_desc27_overlay = img/direction_down_pressed.png\noverlay0_desc27_reach_x = 0\n\n# Directional Down\noverlay0_desc28 = \"down,0.139484,0.523255,rect,0.025035,0.073643\"\noverlay0_desc28_overlay = img/direction_down.png\noverlay0_desc28_reach_x = 0\n\n# Directional Down [Button Hitbox]\noverlay0_desc29 = \"down,0.139484,0.542635,rect,0.025035,0.054263\"\noverlay0_desc29_range_mod = 1.5\noverlay0_desc29_reach_x = 2.0\noverlay0_desc29_reach_down = 1.5\n\n# Directional Down [Centre Hitbox]\noverlay0_desc30 = \"down,0.139484,0.488372,rect,0.012517,0.027131\"\noverlay0_desc30_range_mod = 1.5\n\n# Directional Left [Pressed]\noverlay0_desc31 = \"null,0.098354,0.434108,rect,0.033977,0.054263\"\noverlay0_desc31_overlay = img/direction_left_pressed.png\noverlay0_desc31_reach_x = 0\n\n# Directional Left\noverlay0_desc32 = \"left,0.098354,0.434108,rect,0.033977,0.054263\"\noverlay0_desc32_overlay = img/direction_left.png\noverlay0_desc32_reach_x = 0\n\n# Directional Left [Button Hitbox]\noverlay0_desc33 = \"left,0.089413,0.434108,rect,0.025035,0.054263\"\noverlay0_desc33_range_mod = 1.5\noverlay0_desc33_reach_y = 2.0\noverlay0_desc33_reach_left = 1.5\n\n# Directional Left [Centre Hitbox]\noverlay0_desc34 = \"left,0.114449,0.434108,rect,0.012517,0.027131\"\noverlay0_desc34_range_mod = 1.5\n\n# Directional Right [Pressed]\noverlay0_desc35 = \"null,0.180615,0.434108,rect,0.033977,0.054263\"\noverlay0_desc35_overlay = img/direction_right_pressed.png\noverlay0_desc35_reach_x = 0\n\n# Directional Right\noverlay0_desc36 = \"right,0.180615,0.434108,rect,0.033977,0.054263\"\noverlay0_desc36_overlay = img/direction_right.png\noverlay0_desc36_reach_x = 0\n\n# Directional Right [Button Hitbox]\noverlay0_desc37 = \"right,0.189556,0.434108,rect,0.025035,0.054263\"\noverlay0_desc37_range_mod = 1.5\noverlay0_desc37_reach_y = 2.0\noverlay0_desc37_reach_right = 1.5\n\n# Directional Right [Centre Hitbox]\noverlay0_desc38 = \"right,0.164520,0.434108,rect,0.012517,0.027131\"\noverlay0_desc38_range_mod = 1.5\n\n# Menu Retroarch [Pressed]\noverlay0_desc39 = \"null,0.5,0.023255,rect,0.046494,0.027131\"\noverlay0_desc39_overlay = img/menu_retroarch_pressed.png\noverlay0_desc39_reach_x = 0\n\n# Menu Retroarch\noverlay0_desc40 = \"menu_toggle,0.5,0.023255,rect,0.044706,0.023255\"\noverlay0_desc40_overlay = img/menu_retroarch.png\n\n# Menu Rewind [Pressed]\noverlay0_desc41 = \"null,0.390200,0.023255,rect,0.024678,0.027131\"\noverlay0_desc41_overlay = img/menu_rewind_pressed.png\noverlay0_desc41_reach_x = 0\n\n# Menu Rewind\noverlay0_desc42 = \"rewind,0.390200,0.023255,rect,0.022889,0.023255\"\noverlay0_desc42_overlay = img/menu_rewind.png\n\n# Menu Fastforward [Pressed]\noverlay0_desc43 = \"null,0.609799,0.023255,rect,0.024678,0.027131\"\noverlay0_desc43_overlay = img/menu_fastforward_pressed.png\noverlay0_desc43_reach_x = 0\n\n# Menu Fastforward\noverlay0_desc44 = \"toggle_fast_forward,0.609799,0.023255,rect,0.022889,0.023255\"\noverlay0_desc44_overlay = img/menu_fastforward.png\n\n# Menu Quickload [Pressed]\noverlay0_desc45 = \"null,0.309012,0.023255,rect,0.024678,0.027131\"\noverlay0_desc45_overlay = img/menu_quickload_pressed.png\noverlay0_desc45_reach_x = 0\n\n# Menu Quickload\noverlay0_desc46 = \"load_state,0.309012,0.023255,rect,0.022889,0.023255\"\noverlay0_desc46_overlay = img/menu_quickload.png\n\n# Menu Quicksave [Pressed]\noverlay0_desc47 = \"null,0.690987,0.023255,rect,0.024678,0.027131\"\noverlay0_desc47_overlay = img/menu_quicksave_pressed.png\noverlay0_desc47_reach_x = 0\n\n# Menu Quicksave\noverlay0_desc48 = \"save_state,0.690987,0.023255,rect,0.022889,0.023255\"\noverlay0_desc48_overlay = img/menu_quicksave.png"
    },
    {
        "name": "Black",
        "path": "gamepads/gba_landscape_6x/black.cfg",
        "modes": [
            {
                "name": "Landscape",
                "image": "gamepads/gba_landscape_6x/img/background_black.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "// GBA Landscape\n// iPhone 14 Pro Max\n// Use 6x scaling\n\noverlays = 1\n\noverlay0_name = \"landscape\"\noverlay0_overlay = img/background_black.png\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_range_mod = 1.0\noverlay0_alpha_mod = 0.0001\noverlay0_descs = 49\n\n# Decoration Bezel\noverlay0_desc0 = \"null,0.5,0.523255,rect,0.304005,0.465116\"\noverlay0_desc0_overlay = img/bezel_default.png\noverlay0_desc0_reach_x = 0\n\n# Decoration Bevel\noverlay0_desc1 = \"null,0.5,0.926356,rect,0.5,0.073643\"\noverlay0_desc1_overlay = img/decoration_bevel.png\noverlay0_desc1_reach_x = 0\n\n# Decoration Speaker\noverlay0_desc2 = \"null,0.901287,0.806201,rect,0.054542,0.102325\"\noverlay0_desc2_overlay = img/decoration_speaker.png\noverlay0_desc2_reach_x = 0\n\n# Decoration Power\noverlay0_desc3 = \"null,0.912017,0.193798,rect,0.045958,0.024031\"\noverlay0_desc3_overlay = img/decoration_power.png\noverlay0_desc3_reach_x = 0\n\n# Shoulder Buttons [Background]\noverlay0_desc4 = \"null,0.5,0.093023,rect,0.5,0.093023\"\noverlay0_desc4_overlay = img/decoration_shoulders.png\noverlay0_desc4_reach_x = 0\n\n# Left Shoulder Button [Pressed]\noverlay0_desc5 = \"null,0.112660,0.081395,rect,0.112660,0.081395\"\noverlay0_desc5_overlay = img/shoulder_left_pressed.png\noverlay0_desc5_reach_x = 0\n\n# Left Shoulder Button\noverlay0_desc6 = \"l,0.112660,0.081395,rect,0.112660,0.081395\"\noverlay0_desc6_overlay = img/shoulder_left.png\n\n# Right Shoulder Button [Pressed]\noverlay0_desc7 = \"null,0.887340,0.081395,rect,0.112660,0.081395\"\noverlay0_desc7_overlay = img/shoulder_right_pressed.png\noverlay0_desc7_reach_x = 0\n\n# Right Shoulder Button\noverlay0_desc8 = \"r,0.887340,0.081395,rect,0.112660,0.081395\"\noverlay0_desc8_overlay = img/shoulder_right.png\n\n# A Button [Background]\noverlay0_desc9 = \"null,0.904864,0.379844,radial,0.037553,0.081395\"\noverlay0_desc9_overlay = img/decoration_button.png\noverlay0_desc9_reach_x = 0\n\n# A Button [Pressed]\noverlay0_desc10 = \"null,0.904864,0.379844,radial,0.032188,0.069767\"\noverlay0_desc10_overlay = img/button_a_pressed.png\noverlay0_desc10_reach_x = 0\n\n# A Button\noverlay0_desc11 = \"a,0.904864,0.379844,radial,0.032188,0.069767\"\noverlay0_desc11_overlay = img/button_a.png\noverlay0_desc11_range_mod = 1.25\noverlay0_desc11_reach_x = 2.0\noverlay0_desc11_reach_y = 2.0\n\n# B Button [Background]\noverlay0_desc12 = \"null,0.822603,0.542635,radial,0.037553,0.081395\"\noverlay0_desc12_overlay = img/decoration_button.png\noverlay0_desc12_reach_x = 0\n\n# B Button [Pressed]\noverlay0_desc13 = \"null,0.822603,0.542635,radial,0.032188,0.069767\"\noverlay0_desc13_overlay = img/button_b_pressed.png\noverlay0_desc13_reach_x = 0\n\n# B Button\noverlay0_desc14 = \"b,0.822603,0.542635,radial,0.032188,0.069767\"\noverlay0_desc14_overlay = img/button_b.png\noverlay0_desc14_range_mod = 1.25\noverlay0_desc14_reach_x = 2.0\noverlay0_desc14_reach_y = 2.0\n\n# Start Button [Background]\noverlay0_desc15 = \"null,0.098354,0.740310,rect,0.067060,0.063953\"\noverlay0_desc15_overlay = img/decoration_start.png\noverlay0_desc15_reach_x = 0\n\n# Start Button [Pressed]\noverlay0_desc16 = \"null,0.143061,0.758139,rect,0.016094,0.034883\"\noverlay0_desc16_overlay = img/button_start_pressed.png\noverlay0_desc16_reach_x = 0\n\n# Start Button\noverlay0_desc17 = \"start,0.143061,0.758139,rect,0.016094,0.034883\"\noverlay0_desc17_overlay = img/button_start.png\noverlay0_desc17_reach_left = 7.0\noverlay0_desc17_reach_right = 2.0\noverlay0_desc17_reach_y = 2.0\n\n# Select Button [Background]\noverlay0_desc18 = \"null,0.098354,0.872093,rect,0.067060,0.063953\"\noverlay0_desc18_overlay = img/decoration_select.png\noverlay0_desc18_reach_x = 0\n\n# Select Button [Pressed]\noverlay0_desc19 = \"null,0.143061,0.889922,rect,0.016094,0.034883\"\noverlay0_desc19_overlay = img/button_select_pressed.png\noverlay0_desc19_reach_x = 0\n\n# Select Button\noverlay0_desc20 = \"select,0.143061,0.889922,rect,0.016094,0.034883\"\noverlay0_desc20_overlay = img/button_select.png\noverlay0_desc20_reach_left = 7.0\noverlay0_desc20_reach_right = 2.0\noverlay0_desc20_reach_y = 2.0\n\n# Directional Pad [Background]\noverlay0_desc21 = \"null,0.139484,0.434108,rect,0.080472,0.174418\"\noverlay0_desc21_overlay = img/decoration_dpad_background.png\noverlay0_desc21_reach_x = 0\n\n# Directional Pad [Centre]\noverlay0_desc22 = \"null,0.139484,0.434108,rect,0.075107,0.162790\"\noverlay0_desc22_overlay = img/decoration_dpad_light.png\noverlay0_desc22_reach_x = 0\n\n# Directional Up [Pressed]\noverlay0_desc23 = \"null,0.139484,0.344961,rect,0.025035,0.073643\"\noverlay0_desc23_overlay = img/direction_up_pressed.png\noverlay0_desc23_reach_x = 0\n\n# Directional Up\noverlay0_desc24 = \"up,0.139484,0.344961,rect,0.025035,0.073643\"\noverlay0_desc24_overlay = img/direction_up.png\noverlay0_desc24_reach_x = 0\n\n# Directional Up [Button Hitbox]\noverlay0_desc25 = \"up,0.139484,0.325581,rect,0.025035,0.054263\"\noverlay0_desc25_range_mod = 1.5\noverlay0_desc25_reach_x = 2.0\noverlay0_desc25_reach_up = 1.5\n\n# Directional Up [Centre Hitbox]\noverlay0_desc26 = \"up,0.139484,0.379844,rect,0.012517,0.027131\"\noverlay0_desc26_range_mod = 1.5\n\n# Directional Down [Pressed]\noverlay0_desc27 = \"null,0.139484,0.523255,rect,0.025035,0.073643\"\noverlay0_desc27_overlay = img/direction_down_pressed.png\noverlay0_desc27_reach_x = 0\n\n# Directional Down\noverlay0_desc28 = \"down,0.139484,0.523255,rect,0.025035,0.073643\"\noverlay0_desc28_overlay = img/direction_down.png\noverlay0_desc28_reach_x = 0\n\n# Directional Down [Button Hitbox]\noverlay0_desc29 = \"down,0.139484,0.542635,rect,0.025035,0.054263\"\noverlay0_desc29_range_mod = 1.5\noverlay0_desc29_reach_x = 2.0\noverlay0_desc29_reach_down = 1.5\n\n# Directional Down [Centre Hitbox]\noverlay0_desc30 = \"down,0.139484,0.488372,rect,0.012517,0.027131\"\noverlay0_desc30_range_mod = 1.5\n\n# Directional Left [Pressed]\noverlay0_desc31 = \"null,0.098354,0.434108,rect,0.033977,0.054263\"\noverlay0_desc31_overlay = img/direction_left_pressed.png\noverlay0_desc31_reach_x = 0\n\n# Directional Left\noverlay0_desc32 = \"left,0.098354,0.434108,rect,0.033977,0.054263\"\noverlay0_desc32_overlay = img/direction_left.png\noverlay0_desc32_reach_x = 0\n\n# Directional Left [Button Hitbox]\noverlay0_desc33 = \"left,0.089413,0.434108,rect,0.025035,0.054263\"\noverlay0_desc33_range_mod = 1.5\noverlay0_desc33_reach_y = 2.0\noverlay0_desc33_reach_left = 1.5\n\n# Directional Left [Centre Hitbox]\noverlay0_desc34 = \"left,0.114449,0.434108,rect,0.012517,0.027131\"\noverlay0_desc34_range_mod = 1.5\n\n# Directional Right [Pressed]\noverlay0_desc35 = \"null,0.180615,0.434108,rect,0.033977,0.054263\"\noverlay0_desc35_overlay = img/direction_right_pressed.png\noverlay0_desc35_reach_x = 0\n\n# Directional Right\noverlay0_desc36 = \"right,0.180615,0.434108,rect,0.033977,0.054263\"\noverlay0_desc36_overlay = img/direction_right.png\noverlay0_desc36_reach_x = 0\n\n# Directional Right [Button Hitbox]\noverlay0_desc37 = \"right,0.189556,0.434108,rect,0.025035,0.054263\"\noverlay0_desc37_range_mod = 1.5\noverlay0_desc37_reach_y = 2.0\noverlay0_desc37_reach_right = 1.5\n\n# Directional Right [Centre Hitbox]\noverlay0_desc38 = \"right,0.164520,0.434108,rect,0.012517,0.027131\"\noverlay0_desc38_range_mod = 1.5\n\n# Menu Retroarch [Pressed]\noverlay0_desc39 = \"null,0.5,0.023255,rect,0.046494,0.027131\"\noverlay0_desc39_overlay = img/menu_retroarch_pressed.png\noverlay0_desc39_reach_x = 0\n\n# Menu Retroarch\noverlay0_desc40 = \"menu_toggle,0.5,0.023255,rect,0.044706,0.023255\"\noverlay0_desc40_overlay = img/menu_retroarch.png\n\n# Menu Rewind [Pressed]\noverlay0_desc41 = \"null,0.390200,0.023255,rect,0.024678,0.027131\"\noverlay0_desc41_overlay = img/menu_rewind_pressed.png\noverlay0_desc41_reach_x = 0\n\n# Menu Rewind\noverlay0_desc42 = \"rewind,0.390200,0.023255,rect,0.022889,0.023255\"\noverlay0_desc42_overlay = img/menu_rewind.png\n\n# Menu Fastforward [Pressed]\noverlay0_desc43 = \"null,0.609799,0.023255,rect,0.024678,0.027131\"\noverlay0_desc43_overlay = img/menu_fastforward_pressed.png\noverlay0_desc43_reach_x = 0\n\n# Menu Fastforward\noverlay0_desc44 = \"toggle_fast_forward,0.609799,0.023255,rect,0.022889,0.023255\"\noverlay0_desc44_overlay = img/menu_fastforward.png\n\n# Menu Quickload [Pressed]\noverlay0_desc45 = \"null,0.309012,0.023255,rect,0.024678,0.027131\"\noverlay0_desc45_overlay = img/menu_quickload_pressed.png\noverlay0_desc45_reach_x = 0\n\n# Menu Quickload\noverlay0_desc46 = \"load_state,0.309012,0.023255,rect,0.022889,0.023255\"\noverlay0_desc46_overlay = img/menu_quickload.png\n\n# Menu Quicksave [Pressed]\noverlay0_desc47 = \"null,0.690987,0.023255,rect,0.024678,0.027131\"\noverlay0_desc47_overlay = img/menu_quicksave_pressed.png\noverlay0_desc47_reach_x = 0\n\n# Menu Quicksave\noverlay0_desc48 = \"save_state,0.690987,0.023255,rect,0.022889,0.023255\"\noverlay0_desc48_overlay = img/menu_quicksave.png"
    },
    {
        "name": "Indigo",
        "path": "gamepads/gba_landscape_6x/indigo.cfg",
        "modes": [
            {
                "name": "Landscape",
                "image": "gamepads/gba_landscape_6x/img/background_indigo.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "// GBA Landscape\n// iPhone 14 Pro Max\n// Use 6x scaling\n\noverlays = 1\n\noverlay0_name = \"landscape\"\noverlay0_overlay = img/background_indigo.png\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_range_mod = 1.0\noverlay0_alpha_mod = 0.0001\noverlay0_descs = 49\n\n# Decoration Bezel\noverlay0_desc0 = \"null,0.5,0.523255,rect,0.304005,0.465116\"\noverlay0_desc0_overlay = img/bezel_default.png\noverlay0_desc0_reach_x = 0\n\n# Decoration Bevel\noverlay0_desc1 = \"null,0.5,0.926356,rect,0.5,0.073643\"\noverlay0_desc1_overlay = img/decoration_bevel.png\noverlay0_desc1_reach_x = 0\n\n# Decoration Speaker\noverlay0_desc2 = \"null,0.901287,0.806201,rect,0.054542,0.102325\"\noverlay0_desc2_overlay = img/decoration_speaker.png\noverlay0_desc2_reach_x = 0\n\n# Decoration Power\noverlay0_desc3 = \"null,0.912017,0.193798,rect,0.045958,0.024031\"\noverlay0_desc3_overlay = img/decoration_power.png\noverlay0_desc3_reach_x = 0\n\n# Shoulder Buttons [Background]\noverlay0_desc4 = \"null,0.5,0.093023,rect,0.5,0.093023\"\noverlay0_desc4_overlay = img/decoration_shoulders.png\noverlay0_desc4_reach_x = 0\n\n# Left Shoulder Button [Pressed]\noverlay0_desc5 = \"null,0.112660,0.081395,rect,0.112660,0.081395\"\noverlay0_desc5_overlay = img/shoulder_left_pressed.png\noverlay0_desc5_reach_x = 0\n\n# Left Shoulder Button\noverlay0_desc6 = \"l,0.112660,0.081395,rect,0.112660,0.081395\"\noverlay0_desc6_overlay = img/shoulder_left.png\n\n# Right Shoulder Button [Pressed]\noverlay0_desc7 = \"null,0.887340,0.081395,rect,0.112660,0.081395\"\noverlay0_desc7_overlay = img/shoulder_right_pressed.png\noverlay0_desc7_reach_x = 0\n\n# Right Shoulder Button\noverlay0_desc8 = \"r,0.887340,0.081395,rect,0.112660,0.081395\"\noverlay0_desc8_overlay = img/shoulder_right.png\n\n# A Button [Background]\noverlay0_desc9 = \"null,0.904864,0.379844,radial,0.037553,0.081395\"\noverlay0_desc9_overlay = img/decoration_button.png\noverlay0_desc9_reach_x = 0\n\n# A Button [Pressed]\noverlay0_desc10 = \"null,0.904864,0.379844,radial,0.032188,0.069767\"\noverlay0_desc10_overlay = img/button_a_pressed.png\noverlay0_desc10_reach_x = 0\n\n# A Button\noverlay0_desc11 = \"a,0.904864,0.379844,radial,0.032188,0.069767\"\noverlay0_desc11_overlay = img/button_a.png\noverlay0_desc11_range_mod = 1.25\noverlay0_desc11_reach_x = 2.0\noverlay0_desc11_reach_y = 2.0\n\n# B Button [Background]\noverlay0_desc12 = \"null,0.822603,0.542635,radial,0.037553,0.081395\"\noverlay0_desc12_overlay = img/decoration_button.png\noverlay0_desc12_reach_x = 0\n\n# B Button [Pressed]\noverlay0_desc13 = \"null,0.822603,0.542635,radial,0.032188,0.069767\"\noverlay0_desc13_overlay = img/button_b_pressed.png\noverlay0_desc13_reach_x = 0\n\n# B Button\noverlay0_desc14 = \"b,0.822603,0.542635,radial,0.032188,0.069767\"\noverlay0_desc14_overlay = img/button_b.png\noverlay0_desc14_range_mod = 1.25\noverlay0_desc14_reach_x = 2.0\noverlay0_desc14_reach_y = 2.0\n\n# Start Button [Background]\noverlay0_desc15 = \"null,0.098354,0.740310,rect,0.067060,0.063953\"\noverlay0_desc15_overlay = img/decoration_start.png\noverlay0_desc15_reach_x = 0\n\n# Start Button [Pressed]\noverlay0_desc16 = \"null,0.143061,0.758139,rect,0.016094,0.034883\"\noverlay0_desc16_overlay = img/button_start_pressed.png\noverlay0_desc16_reach_x = 0\n\n# Start Button\noverlay0_desc17 = \"start,0.143061,0.758139,rect,0.016094,0.034883\"\noverlay0_desc17_overlay = img/button_start.png\noverlay0_desc17_reach_left = 7.0\noverlay0_desc17_reach_right = 2.0\noverlay0_desc17_reach_y = 2.0\n\n# Select Button [Background]\noverlay0_desc18 = \"null,0.098354,0.872093,rect,0.067060,0.063953\"\noverlay0_desc18_overlay = img/decoration_select.png\noverlay0_desc18_reach_x = 0\n\n# Select Button [Pressed]\noverlay0_desc19 = \"null,0.143061,0.889922,rect,0.016094,0.034883\"\noverlay0_desc19_overlay = img/button_select_pressed.png\noverlay0_desc19_reach_x = 0\n\n# Select Button\noverlay0_desc20 = \"select,0.143061,0.889922,rect,0.016094,0.034883\"\noverlay0_desc20_overlay = img/button_select.png\noverlay0_desc20_reach_left = 7.0\noverlay0_desc20_reach_right = 2.0\noverlay0_desc20_reach_y = 2.0\n\n# Directional Pad [Background]\noverlay0_desc21 = \"null,0.139484,0.434108,rect,0.080472,0.174418\"\noverlay0_desc21_overlay = img/decoration_dpad_background.png\noverlay0_desc21_reach_x = 0\n\n# Directional Pad [Centre]\noverlay0_desc22 = \"null,0.139484,0.434108,rect,0.075107,0.162790\"\noverlay0_desc22_overlay = img/decoration_dpad_light.png\noverlay0_desc22_reach_x = 0\n\n# Directional Up [Pressed]\noverlay0_desc23 = \"null,0.139484,0.344961,rect,0.025035,0.073643\"\noverlay0_desc23_overlay = img/direction_up_pressed.png\noverlay0_desc23_reach_x = 0\n\n# Directional Up\noverlay0_desc24 = \"up,0.139484,0.344961,rect,0.025035,0.073643\"\noverlay0_desc24_overlay = img/direction_up.png\noverlay0_desc24_reach_x = 0\n\n# Directional Up [Button Hitbox]\noverlay0_desc25 = \"up,0.139484,0.325581,rect,0.025035,0.054263\"\noverlay0_desc25_range_mod = 1.5\noverlay0_desc25_reach_x = 2.0\noverlay0_desc25_reach_up = 1.5\n\n# Directional Up [Centre Hitbox]\noverlay0_desc26 = \"up,0.139484,0.379844,rect,0.012517,0.027131\"\noverlay0_desc26_range_mod = 1.5\n\n# Directional Down [Pressed]\noverlay0_desc27 = \"null,0.139484,0.523255,rect,0.025035,0.073643\"\noverlay0_desc27_overlay = img/direction_down_pressed.png\noverlay0_desc27_reach_x = 0\n\n# Directional Down\noverlay0_desc28 = \"down,0.139484,0.523255,rect,0.025035,0.073643\"\noverlay0_desc28_overlay = img/direction_down.png\noverlay0_desc28_reach_x = 0\n\n# Directional Down [Button Hitbox]\noverlay0_desc29 = \"down,0.139484,0.542635,rect,0.025035,0.054263\"\noverlay0_desc29_range_mod = 1.5\noverlay0_desc29_reach_x = 2.0\noverlay0_desc29_reach_down = 1.5\n\n# Directional Down [Centre Hitbox]\noverlay0_desc30 = \"down,0.139484,0.488372,rect,0.012517,0.027131\"\noverlay0_desc30_range_mod = 1.5\n\n# Directional Left [Pressed]\noverlay0_desc31 = \"null,0.098354,0.434108,rect,0.033977,0.054263\"\noverlay0_desc31_overlay = img/direction_left_pressed.png\noverlay0_desc31_reach_x = 0\n\n# Directional Left\noverlay0_desc32 = \"left,0.098354,0.434108,rect,0.033977,0.054263\"\noverlay0_desc32_overlay = img/direction_left.png\noverlay0_desc32_reach_x = 0\n\n# Directional Left [Button Hitbox]\noverlay0_desc33 = \"left,0.089413,0.434108,rect,0.025035,0.054263\"\noverlay0_desc33_range_mod = 1.5\noverlay0_desc33_reach_y = 2.0\noverlay0_desc33_reach_left = 1.5\n\n# Directional Left [Centre Hitbox]\noverlay0_desc34 = \"left,0.114449,0.434108,rect,0.012517,0.027131\"\noverlay0_desc34_range_mod = 1.5\n\n# Directional Right [Pressed]\noverlay0_desc35 = \"null,0.180615,0.434108,rect,0.033977,0.054263\"\noverlay0_desc35_overlay = img/direction_right_pressed.png\noverlay0_desc35_reach_x = 0\n\n# Directional Right\noverlay0_desc36 = \"right,0.180615,0.434108,rect,0.033977,0.054263\"\noverlay0_desc36_overlay = img/direction_right.png\noverlay0_desc36_reach_x = 0\n\n# Directional Right [Button Hitbox]\noverlay0_desc37 = \"right,0.189556,0.434108,rect,0.025035,0.054263\"\noverlay0_desc37_range_mod = 1.5\noverlay0_desc37_reach_y = 2.0\noverlay0_desc37_reach_right = 1.5\n\n# Directional Right [Centre Hitbox]\noverlay0_desc38 = \"right,0.164520,0.434108,rect,0.012517,0.027131\"\noverlay0_desc38_range_mod = 1.5\n\n# Menu Retroarch [Pressed]\noverlay0_desc39 = \"null,0.5,0.023255,rect,0.046494,0.027131\"\noverlay0_desc39_overlay = img/menu_retroarch_pressed.png\noverlay0_desc39_reach_x = 0\n\n# Menu Retroarch\noverlay0_desc40 = \"menu_toggle,0.5,0.023255,rect,0.044706,0.023255\"\noverlay0_desc40_overlay = img/menu_retroarch.png\n\n# Menu Rewind [Pressed]\noverlay0_desc41 = \"null,0.390200,0.023255,rect,0.024678,0.027131\"\noverlay0_desc41_overlay = img/menu_rewind_pressed.png\noverlay0_desc41_reach_x = 0\n\n# Menu Rewind\noverlay0_desc42 = \"rewind,0.390200,0.023255,rect,0.022889,0.023255\"\noverlay0_desc42_overlay = img/menu_rewind.png\n\n# Menu Fastforward [Pressed]\noverlay0_desc43 = \"null,0.609799,0.023255,rect,0.024678,0.027131\"\noverlay0_desc43_overlay = img/menu_fastforward_pressed.png\noverlay0_desc43_reach_x = 0\n\n# Menu Fastforward\noverlay0_desc44 = \"toggle_fast_forward,0.609799,0.023255,rect,0.022889,0.023255\"\noverlay0_desc44_overlay = img/menu_fastforward.png\n\n# Menu Quickload [Pressed]\noverlay0_desc45 = \"null,0.309012,0.023255,rect,0.024678,0.027131\"\noverlay0_desc45_overlay = img/menu_quickload_pressed.png\noverlay0_desc45_reach_x = 0\n\n# Menu Quickload\noverlay0_desc46 = \"load_state,0.309012,0.023255,rect,0.022889,0.023255\"\noverlay0_desc46_overlay = img/menu_quickload.png\n\n# Menu Quicksave [Pressed]\noverlay0_desc47 = \"null,0.690987,0.023255,rect,0.024678,0.027131\"\noverlay0_desc47_overlay = img/menu_quicksave_pressed.png\noverlay0_desc47_reach_x = 0\n\n# Menu Quicksave\noverlay0_desc48 = \"save_state,0.690987,0.023255,rect,0.022889,0.023255\"\noverlay0_desc48_overlay = img/menu_quicksave.png"
    },
    {
        "name": "Orange",
        "path": "gamepads/gba_landscape_6x/orange.cfg",
        "modes": [
            {
                "name": "Landscape",
                "image": "gamepads/gba_landscape_6x/img/background_orange.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "// GBA Landscape\n// iPhone 14 Pro Max\n// Use 6x scaling\n\noverlays = 1\n\noverlay0_name = \"landscape\"\noverlay0_overlay = img/background_orange.png\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_range_mod = 1.0\noverlay0_alpha_mod = 0.0001\noverlay0_descs = 49\n\n# Decoration Bezel\noverlay0_desc0 = \"null,0.5,0.523255,rect,0.304005,0.465116\"\noverlay0_desc0_overlay = img/bezel_default.png\noverlay0_desc0_reach_x = 0\n\n# Decoration Bevel\noverlay0_desc1 = \"null,0.5,0.926356,rect,0.5,0.073643\"\noverlay0_desc1_overlay = img/decoration_bevel.png\noverlay0_desc1_reach_x = 0\n\n# Decoration Speaker\noverlay0_desc2 = \"null,0.901287,0.806201,rect,0.054542,0.102325\"\noverlay0_desc2_overlay = img/decoration_speaker.png\noverlay0_desc2_reach_x = 0\n\n# Decoration Power\noverlay0_desc3 = \"null,0.912017,0.193798,rect,0.045958,0.024031\"\noverlay0_desc3_overlay = img/decoration_power.png\noverlay0_desc3_reach_x = 0\n\n# Shoulder Buttons [Background]\noverlay0_desc4 = \"null,0.5,0.093023,rect,0.5,0.093023\"\noverlay0_desc4_overlay = img/decoration_shoulders.png\noverlay0_desc4_reach_x = 0\n\n# Left Shoulder Button [Pressed]\noverlay0_desc5 = \"null,0.112660,0.081395,rect,0.112660,0.081395\"\noverlay0_desc5_overlay = img/shoulder_left_pressed.png\noverlay0_desc5_reach_x = 0\n\n# Left Shoulder Button\noverlay0_desc6 = \"l,0.112660,0.081395,rect,0.112660,0.081395\"\noverlay0_desc6_overlay = img/shoulder_left.png\n\n# Right Shoulder Button [Pressed]\noverlay0_desc7 = \"null,0.887340,0.081395,rect,0.112660,0.081395\"\noverlay0_desc7_overlay = img/shoulder_right_pressed.png\noverlay0_desc7_reach_x = 0\n\n# Right Shoulder Button\noverlay0_desc8 = \"r,0.887340,0.081395,rect,0.112660,0.081395\"\noverlay0_desc8_overlay = img/shoulder_right.png\n\n# A Button [Background]\noverlay0_desc9 = \"null,0.904864,0.379844,radial,0.037553,0.081395\"\noverlay0_desc9_overlay = img/decoration_button.png\noverlay0_desc9_reach_x = 0\n\n# A Button [Pressed]\noverlay0_desc10 = \"null,0.904864,0.379844,radial,0.032188,0.069767\"\noverlay0_desc10_overlay = img/button_a_pressed.png\noverlay0_desc10_reach_x = 0\n\n# A Button\noverlay0_desc11 = \"a,0.904864,0.379844,radial,0.032188,0.069767\"\noverlay0_desc11_overlay = img/button_a.png\noverlay0_desc11_range_mod = 1.25\noverlay0_desc11_reach_x = 2.0\noverlay0_desc11_reach_y = 2.0\n\n# B Button [Background]\noverlay0_desc12 = \"null,0.822603,0.542635,radial,0.037553,0.081395\"\noverlay0_desc12_overlay = img/decoration_button.png\noverlay0_desc12_reach_x = 0\n\n# B Button [Pressed]\noverlay0_desc13 = \"null,0.822603,0.542635,radial,0.032188,0.069767\"\noverlay0_desc13_overlay = img/button_b_pressed.png\noverlay0_desc13_reach_x = 0\n\n# B Button\noverlay0_desc14 = \"b,0.822603,0.542635,radial,0.032188,0.069767\"\noverlay0_desc14_overlay = img/button_b.png\noverlay0_desc14_range_mod = 1.25\noverlay0_desc14_reach_x = 2.0\noverlay0_desc14_reach_y = 2.0\n\n# Start Button [Background]\noverlay0_desc15 = \"null,0.098354,0.740310,rect,0.067060,0.063953\"\noverlay0_desc15_overlay = img/decoration_start.png\noverlay0_desc15_reach_x = 0\n\n# Start Button [Pressed]\noverlay0_desc16 = \"null,0.143061,0.758139,rect,0.016094,0.034883\"\noverlay0_desc16_overlay = img/button_start_pressed.png\noverlay0_desc16_reach_x = 0\n\n# Start Button\noverlay0_desc17 = \"start,0.143061,0.758139,rect,0.016094,0.034883\"\noverlay0_desc17_overlay = img/button_start.png\noverlay0_desc17_reach_left = 7.0\noverlay0_desc17_reach_right = 2.0\noverlay0_desc17_reach_y = 2.0\n\n# Select Button [Background]\noverlay0_desc18 = \"null,0.098354,0.872093,rect,0.067060,0.063953\"\noverlay0_desc18_overlay = img/decoration_select.png\noverlay0_desc18_reach_x = 0\n\n# Select Button [Pressed]\noverlay0_desc19 = \"null,0.143061,0.889922,rect,0.016094,0.034883\"\noverlay0_desc19_overlay = img/button_select_pressed.png\noverlay0_desc19_reach_x = 0\n\n# Select Button\noverlay0_desc20 = \"select,0.143061,0.889922,rect,0.016094,0.034883\"\noverlay0_desc20_overlay = img/button_select.png\noverlay0_desc20_reach_left = 7.0\noverlay0_desc20_reach_right = 2.0\noverlay0_desc20_reach_y = 2.0\n\n# Directional Pad [Background]\noverlay0_desc21 = \"null,0.139484,0.434108,rect,0.080472,0.174418\"\noverlay0_desc21_overlay = img/decoration_dpad_background.png\noverlay0_desc21_reach_x = 0\n\n# Directional Pad [Centre]\noverlay0_desc22 = \"null,0.139484,0.434108,rect,0.075107,0.162790\"\noverlay0_desc22_overlay = img/decoration_dpad_light.png\noverlay0_desc22_reach_x = 0\n\n# Directional Up [Pressed]\noverlay0_desc23 = \"null,0.139484,0.344961,rect,0.025035,0.073643\"\noverlay0_desc23_overlay = img/direction_up_pressed.png\noverlay0_desc23_reach_x = 0\n\n# Directional Up\noverlay0_desc24 = \"up,0.139484,0.344961,rect,0.025035,0.073643\"\noverlay0_desc24_overlay = img/direction_up.png\noverlay0_desc24_reach_x = 0\n\n# Directional Up [Button Hitbox]\noverlay0_desc25 = \"up,0.139484,0.325581,rect,0.025035,0.054263\"\noverlay0_desc25_range_mod = 1.5\noverlay0_desc25_reach_x = 2.0\noverlay0_desc25_reach_up = 1.5\n\n# Directional Up [Centre Hitbox]\noverlay0_desc26 = \"up,0.139484,0.379844,rect,0.012517,0.027131\"\noverlay0_desc26_range_mod = 1.5\n\n# Directional Down [Pressed]\noverlay0_desc27 = \"null,0.139484,0.523255,rect,0.025035,0.073643\"\noverlay0_desc27_overlay = img/direction_down_pressed.png\noverlay0_desc27_reach_x = 0\n\n# Directional Down\noverlay0_desc28 = \"down,0.139484,0.523255,rect,0.025035,0.073643\"\noverlay0_desc28_overlay = img/direction_down.png\noverlay0_desc28_reach_x = 0\n\n# Directional Down [Button Hitbox]\noverlay0_desc29 = \"down,0.139484,0.542635,rect,0.025035,0.054263\"\noverlay0_desc29_range_mod = 1.5\noverlay0_desc29_reach_x = 2.0\noverlay0_desc29_reach_down = 1.5\n\n# Directional Down [Centre Hitbox]\noverlay0_desc30 = \"down,0.139484,0.488372,rect,0.012517,0.027131\"\noverlay0_desc30_range_mod = 1.5\n\n# Directional Left [Pressed]\noverlay0_desc31 = \"null,0.098354,0.434108,rect,0.033977,0.054263\"\noverlay0_desc31_overlay = img/direction_left_pressed.png\noverlay0_desc31_reach_x = 0\n\n# Directional Left\noverlay0_desc32 = \"left,0.098354,0.434108,rect,0.033977,0.054263\"\noverlay0_desc32_overlay = img/direction_left.png\noverlay0_desc32_reach_x = 0\n\n# Directional Left [Button Hitbox]\noverlay0_desc33 = \"left,0.089413,0.434108,rect,0.025035,0.054263\"\noverlay0_desc33_range_mod = 1.5\noverlay0_desc33_reach_y = 2.0\noverlay0_desc33_reach_left = 1.5\n\n# Directional Left [Centre Hitbox]\noverlay0_desc34 = \"left,0.114449,0.434108,rect,0.012517,0.027131\"\noverlay0_desc34_range_mod = 1.5\n\n# Directional Right [Pressed]\noverlay0_desc35 = \"null,0.180615,0.434108,rect,0.033977,0.054263\"\noverlay0_desc35_overlay = img/direction_right_pressed.png\noverlay0_desc35_reach_x = 0\n\n# Directional Right\noverlay0_desc36 = \"right,0.180615,0.434108,rect,0.033977,0.054263\"\noverlay0_desc36_overlay = img/direction_right.png\noverlay0_desc36_reach_x = 0\n\n# Directional Right [Button Hitbox]\noverlay0_desc37 = \"right,0.189556,0.434108,rect,0.025035,0.054263\"\noverlay0_desc37_range_mod = 1.5\noverlay0_desc37_reach_y = 2.0\noverlay0_desc37_reach_right = 1.5\n\n# Directional Right [Centre Hitbox]\noverlay0_desc38 = \"right,0.164520,0.434108,rect,0.012517,0.027131\"\noverlay0_desc38_range_mod = 1.5\n\n# Menu Retroarch [Pressed]\noverlay0_desc39 = \"null,0.5,0.023255,rect,0.046494,0.027131\"\noverlay0_desc39_overlay = img/menu_retroarch_pressed.png\noverlay0_desc39_reach_x = 0\n\n# Menu Retroarch\noverlay0_desc40 = \"menu_toggle,0.5,0.023255,rect,0.044706,0.023255\"\noverlay0_desc40_overlay = img/menu_retroarch.png\n\n# Menu Rewind [Pressed]\noverlay0_desc41 = \"null,0.390200,0.023255,rect,0.024678,0.027131\"\noverlay0_desc41_overlay = img/menu_rewind_pressed.png\noverlay0_desc41_reach_x = 0\n\n# Menu Rewind\noverlay0_desc42 = \"rewind,0.390200,0.023255,rect,0.022889,0.023255\"\noverlay0_desc42_overlay = img/menu_rewind.png\n\n# Menu Fastforward [Pressed]\noverlay0_desc43 = \"null,0.609799,0.023255,rect,0.024678,0.027131\"\noverlay0_desc43_overlay = img/menu_fastforward_pressed.png\noverlay0_desc43_reach_x = 0\n\n# Menu Fastforward\noverlay0_desc44 = \"toggle_fast_forward,0.609799,0.023255,rect,0.022889,0.023255\"\noverlay0_desc44_overlay = img/menu_fastforward.png\n\n# Menu Quickload [Pressed]\noverlay0_desc45 = \"null,0.309012,0.023255,rect,0.024678,0.027131\"\noverlay0_desc45_overlay = img/menu_quickload_pressed.png\noverlay0_desc45_reach_x = 0\n\n# Menu Quickload\noverlay0_desc46 = \"load_state,0.309012,0.023255,rect,0.022889,0.023255\"\noverlay0_desc46_overlay = img/menu_quickload.png\n\n# Menu Quicksave [Pressed]\noverlay0_desc47 = \"null,0.690987,0.023255,rect,0.024678,0.027131\"\noverlay0_desc47_overlay = img/menu_quicksave_pressed.png\noverlay0_desc47_reach_x = 0\n\n# Menu Quicksave\noverlay0_desc48 = \"save_state,0.690987,0.023255,rect,0.022889,0.023255\"\noverlay0_desc48_overlay = img/menu_quicksave.png"
    },
    {
        "name": "Gb_Big",
        "path": "gamepads/gb_anim_portrait/gb_big.cfg",
        "modes": [
            {
                "name": "Gameboy",
                "image": "gamepads/gb_anim_portrait/img/gb_back.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Gameboycolor",
                "image": "gamepads/gb_anim_portrait/img/gbc_back.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 2\n\noverlay0_name = \"GameBoy\"\noverlay0_overlay = img/gb_back.png\noverlay0_full_screen = true\noverlay0_normalized = true\noverlay0_range_mod = 1.0\noverlay0_alpha_mod = 0.001\n\noverlay1_name = \"GameBoyColor\"\noverlay1_overlay = img/gbc_back.png\noverlay1_full_screen = true\noverlay1_normalized = true\noverlay1_range_mod = 1.0\noverlay1_alpha_mod = 0.001\n\n# GameBoy\noverlay0_descs = 18\n\noverlay0_desc0 = \"left,0.12778,0.73417,radial,0.09630,0.04635\"\noverlay0_desc0_overlay = img/gb_left.png\noverlay0_desc1 = \"right,0.35370,0.73417,radial,0.09630,0.04635\"\noverlay0_desc1_overlay = img/gb_right.png\noverlay0_desc2 = \"up,0.24074,0.67063,radial,0.08241,0.05417\"\noverlay0_desc2_overlay = img/gb_up.png\noverlay0_desc3 = \"down,0.24074,0.79771,radial,0.08241,0.05417\"\noverlay0_desc3_overlay = img/gb_down.png\noverlay0_desc4 = \"left|up,0.09259,0.65188,rect,0.06481,0.03646\"\noverlay0_desc5 = \"right|up,0.38704,0.65188,rect,0.06481,0.03646\"\noverlay0_desc6 = \"left|down,0.09259,0.81750,rect,0.06481,0.03646\"\noverlay0_desc7 = \"right|down,0.38704,0.81750,rect,0.06481,0.03646\"\noverlay0_desc8 = \"a,0.87407,0.72417,radial,0.08889,0.05000\"\noverlay0_desc8_overlay = img/gb_a_b.png\noverlay0_desc9 = \"b,0.68148,0.76584,radial,0.08889,0.05000\"\noverlay0_desc9_overlay = img/gb_a_b.png\noverlay0_desc10 = \"a|b,0.77037,0.73417,radial,0.02963,0.01667\"\noverlay0_desc11 = \"a|b,0.78518,0.75584,radial,0.02963,0.01667\"\noverlay0_desc12 = \"start,0.66666,0.93000,radial,0.07037,0.03958\"\noverlay0_desc12_overlay = img/gb_start_select.png\noverlay0_desc13 = \"select,0.33333,0.93000,radial,0.07037,0.03958\"\noverlay0_desc13_overlay = img/gb_start_select.png\noverlay0_desc14 = \"menu_toggle,0.05000,0.52800,radial,0.041296,0.02323\"\noverlay0_desc14_overlay = img/menu.png\noverlay0_desc15 = \"overlay_next,0.95000,0.52800,radial,0.041296,0.02323\"\noverlay0_desc15_overlay = img/rotate.png\noverlay0_desc15_next_target = \"GameBoyColor\"\noverlay0_desc16 = \"rewind,0.05000,0.97500,radial,0.041296,0.02323\"\noverlay0_desc16_overlay =\noverlay0_desc17 = \"hold_fast_forward,0.95000,0.97500,radial,0.041296,0.02323\"\noverlay0_desc17_overlay =\n\n# GameBoyColor\noverlay1_descs = 18\n\noverlay1_desc0 = \"left,0.14078,0.73417,radial,0.08530,0.04635\"\noverlay1_desc0_overlay = img/gbc_left.png\noverlay1_desc1 = \"right,0.34270,0.73417,radial,0.08530,0.04635\"\noverlay1_desc1_overlay = img/gbc_right.png\noverlay1_desc2 = \"up,0.24074,0.67863,radial,0.08241,0.04617\"\noverlay1_desc2_overlay = img/gbc_up.png\noverlay1_desc3 = \"down,0.24074,0.78971,radial,0.08241,0.04617\"\noverlay1_desc3_overlay = img/gbc_down.png\noverlay1_desc4 = \"left|up,0.09259,0.65188,rect,0.06481,0.03646\"\noverlay1_desc5 = \"right|up,0.38704,0.65188,rect,0.06481,0.03646\"\noverlay1_desc6 = \"left|down,0.09259,0.81750,rect,0.06481,0.03646\"\noverlay1_desc7 = \"right|down,0.38704,0.81750,rect,0.06481,0.03646\"\noverlay1_desc8 = \"a,0.87407,0.72417,radial,0.08889,0.05000\"\noverlay1_desc8_overlay = img/gbc_a.png\noverlay1_desc9 = \"b,0.68148,0.76584,radial,0.08889,0.05000\"\noverlay1_desc9_overlay = img/gbc_b.png\noverlay1_desc10 = \"a|b,0.77037,0.73417,radial,0.02963,0.01667\"\noverlay1_desc11 = \"a|b,0.78518,0.75584,radial,0.02963,0.01667\"\noverlay1_desc12 = \"start,0.66666,0.93000,radial,0.07037,0.03958\"\noverlay1_desc12_overlay = img/gbc_start_select.png\noverlay1_desc13 = \"select,0.33333,0.93000,radial,0.07037,0.03958\"\noverlay1_desc13_overlay = img/gbc_start_select.png\noverlay1_desc14 = \"menu_toggle,0.05000,0.52800,radial,0.041296,0.02323\"\noverlay1_desc14_overlay = img/menu.png\noverlay1_desc15 = \"overlay_next,0.95000,0.52800,radial,0.041296,0.02323\"\noverlay1_desc15_overlay = img/rotate.png\noverlay1_desc15_next_target = \"GameBoy\"\noverlay1_desc16 = \"rewind,0.05000,0.97500,radial,0.041296,0.02323\"\noverlay1_desc16_overlay =\noverlay1_desc17 = \"hold_fast_forward,0.95000,0.97500,radial,0.041296,0.02323\"\noverlay1_desc17_overlay ="
    },
    {
        "name": "720 Med",
        "path": "gamepads/old/720-med.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/720-med.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/720-med-menu.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 2\n\noverlay0_overlay = 720-med.png\noverlay1_overlay = 720-med-menu.png\noverlay0_full_screen = true\noverlay1_full_screen = true\n\noverlay0_descs = 17\noverlay0_desc0  = \"left,59,576,rect,59,76\"\noverlay0_desc1  = \"right,252,576,rect,59,76\"\noverlay0_desc2  = \"up,159,483,rect,95,61\"\noverlay0_desc3  = \"down,159,668,rect,95,61\"\n\noverlay0_desc4  = \"l,53,401,rect,48,27\"\noverlay0_desc5  = \"l2,150,405,rect,48,27\"\noverlay0_desc6  = \"r2,1128,407,rect,41,24\"\noverlay0_desc7  = \"r,1222,407,rect,41,24\"\n\noverlay0_desc8  = \"select,612,700,radial,22,20\"\noverlay0_desc9  = \"start,680,700,radial,22,20\"\n\noverlay0_desc10 = \"b,1125,662,radial,45,45\"\noverlay0_desc11 = \"a,1042,590,radial,45,45\"\noverlay0_desc12 = \"x,1124,503,radial,45,45\"\noverlay0_desc13 = \"y,1205,580,radial,45,45\"\n\noverlay0_desc14  = \"rewind,61,31,rect,68,32\"\noverlay0_desc15  = \"toggle_fast_forward,1220,26,rect,68,32\"\noverlay0_desc16 = \"overlay_next,644,25,radial,34,19\"\n\noverlay1_descs = 23\noverlay1_desc0  = \"left,59,576,rect,59,76\"\noverlay1_desc1  = \"right,252,576,rect,59,76\"\noverlay1_desc2  = \"up,159,483,rect,95,61\"\noverlay1_desc3  = \"down,159,668,rect,95,61\"\n\noverlay1_desc4  = \"l,53,401,rect,48,27\"\noverlay1_desc5  = \"l2,150,405,rect,48,27\"\noverlay1_desc6  = \"r2,1128,407,rect,41,24\"\noverlay1_desc7  = \"r,1222,407,rect,41,24\"\n\noverlay1_desc8  = \"select,612,700,radial,22,20\"\noverlay1_desc9  = \"start,680,700,radial,22,20\"\n\noverlay1_desc10 = \"b,1125,662,radial,45,45\"\noverlay1_desc11 = \"a,1042,590,radial,45,45\"\noverlay1_desc12 = \"x,1124,503,radial,45,45\"\noverlay1_desc13 = \"y,1205,580,radial,45,45\"\n\noverlay1_desc14  = \"rewind,61,31,rect,68,32\"\noverlay1_desc15  = \"toggle_fast_foward,1220,26,rect,68,32\"\noverlay1_desc16 = \"overlay_next,644,25,radial,34,19\"\n\n\noverlay1_desc17  = \"load_state,189,29,rect,65,32\"\noverlay1_desc18  = \"save_state,316,29,rect,65,32\"\noverlay1_desc19   = \"reset,450,29,rect,65,32\"\noverlay1_desc20  = \"state_slot_increase,836,29,rect,65,32\"\noverlay1_desc21  = \"state_slot_decrease,963,29,rect,65,32\"\noverlay1_desc22  = \"slowmotion,1092,29,rect,65,32\"\n\n\n"
    },
    {
        "name": "Box Gba With Diagonals",
        "path": "gamepads/old/box-gba-with-diagonals.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/gba.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/gba_portrait.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/gba_quickmenu.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 3",
                "image": "gamepads/old/gba_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\n\noverlay0_overlay = gba.png\noverlay1_overlay = gba_portrait.png\noverlay2_overlay = gba_quickmenu.png\noverlay3_overlay = gba_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\noverlay2_full_screen = true\noverlay3_full_screen = true\n\noverlay0_descs = 15\noverlay0_desc0 = \"left,35,385,radial,42,42\"\noverlay0_desc1 = \"right,155,385,radial,42,42\"\noverlay0_desc2 = \"up,95,325,radial,42,42\"\noverlay0_desc3 = \"down,95,445,radial,42,42\"\noverlay0_desc4 = \"start,520,450,rect,50,25\"\noverlay0_desc5 = \"select,280,450,rect,50,25\"\noverlay0_desc6 = \"b,675,435,radial,40,40\"\noverlay0_desc7 = \"a,755,385,radial,40,40\"\noverlay0_desc8 = \"l,50,35,rect,50,25\"\noverlay0_desc9 = \"r,750,35,rect,50,25\"\noverlay0_desc10 = \"overlay_next,400,460,rect,40,20\"\noverlay0_desc11 = \"left|down,35,445,radial,25,25\"\noverlay0_desc12 = \"right|up,155,325,radial,25,25\"\noverlay0_desc13 = \"up|left,35,325,radial,25,25\"\noverlay0_desc14 = \"down|right,155,445,radial,25,25\"\n\noverlay1_descs = 15\noverlay1_desc0 = \"left,45,695,radial,42,42\"\noverlay1_desc1 = \"right,165,695,radial,42,42\"\noverlay1_desc2 = \"up,105,635,radial,42,42\"\noverlay1_desc3 = \"down,105,755,radial,42,42\"\noverlay1_desc4 = \"start,240,565,rect,50,20\"\noverlay1_desc5 = \"select,240,495,rect,50,20\"\noverlay1_desc6 = \"b,345,725,radial,40,40\"\noverlay1_desc7 = \"a,425,675,radial,40,40\"\noverlay1_desc8 = \"l,50,495,rect,50,25\"\noverlay1_desc9 = \"r,430,495,rect,50,25\"\noverlay1_desc10 = \"overlay_next,20,400,rect,20,40\"\noverlay1_desc11 = \"left|down,45,755,radial,25,25\"\noverlay1_desc12 = \"right|up,165,635,radial,25,25\"\noverlay1_desc13 = \"up|left,45,635,radial,25,25\"\noverlay1_desc14 = \"down|right,165,755,radial,25,25\"\n\noverlay2_descs = 11\noverlay2_desc0 = \"load_state,270,90,rect,120,30\"\noverlay2_desc1 = \"save_state,270,170,rect,120,30\"\noverlay2_desc3 = \"state_slot_increase,270,250,rect,120,30\"\noverlay2_desc2 = \"state_slot_decrease,270,330,rect,120,30\"\noverlay2_desc6 = \"reset,250,410,rect,100,30\"\noverlay2_desc4 = \"rewind,530,90,rect,120,30\"\noverlay2_desc5 = \"slowmotion,530,170,rect,120,30\"\noverlay2_desc7 = \"toggle_fast_forward,530,250,rect,120,300\"\noverlay2_desc9 = \"shader_prev,530,330,rect,120,30\"\noverlay2_desc8 = \"shader_next,550,410,rect,100,30\"\noverlay2_desc10 = \"overlay_next,400,460,rect,40,20\"\n\noverlay3_descs = 1\noverlay3_rect = \"0.4375,0.916,0.125,0.084\"\noverlay3_desc0 = \"overlay_next,50,20,rect,50,20\""
    },
    {
        "name": "Box Gba",
        "path": "gamepads/old/box-gba.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/gba.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/gba_portrait.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/gba_quickmenu.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 3",
                "image": "gamepads/old/gba_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\n\noverlay0_overlay = gba.png\noverlay1_overlay = gba_portrait.png\noverlay2_overlay = gba_quickmenu.png\noverlay3_overlay = gba_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\noverlay2_full_screen = true\noverlay3_full_screen = true\n\noverlay0_descs = 11\noverlay0_desc0 = \"left,35,385,radial,42,42\"\noverlay0_desc1 = \"right,155,385,radial,42,42\"\noverlay0_desc2 = \"up,95,325,radial,42,42\"\noverlay0_desc3 = \"down,95,445,radial,42,42\"\noverlay0_desc4 = \"start,520,450,rect,50,25\"\noverlay0_desc5 = \"select,280,450,rect,50,25\"\noverlay0_desc6 = \"b,675,435,radial,40,40\"\noverlay0_desc7 = \"a,755,385,radial,40,40\"\noverlay0_desc8 = \"l,50,35,rect,50,25\"\noverlay0_desc9 = \"r,750,35,rect,50,25\"\noverlay0_desc10 = \"overlay_next,400,460,rect,40,20\"\n\noverlay1_descs = 11\noverlay1_desc0 = \"left,45,695,radial,42,42\"\noverlay1_desc1 = \"right,165,695,radial,42,42\"\noverlay1_desc2 = \"up,105,635,radial,42,42\"\noverlay1_desc3 = \"down,105,755,radial,42,42\"\noverlay1_desc4 = \"start,240,565,rect,50,20\"\noverlay1_desc5 = \"select,240,495,rect,50,20\"\noverlay1_desc6 = \"b,345,725,radial,40,40\"\noverlay1_desc7 = \"a,425,675,radial,40,40\"\noverlay1_desc8 = \"l,50,495,rect,50,25\"\noverlay1_desc9 = \"r,430,495,rect,50,25\"\noverlay1_desc10 = \"overlay_next,20,400,rect,20,40\"\n\noverlay2_descs = 11\noverlay2_desc0 = \"load_state,270,90,rect,120,30\"\noverlay2_desc1 = \"save_state,270,170,rect,120,30\"\noverlay2_desc3 = \"state_slot_increase,270,250,rect,120,30\"\noverlay2_desc2 = \"state_slot_decrease,270,330,rect,120,30\"\noverlay2_desc6 = \"reset,250,410,rect,100,30\"\noverlay2_desc4 = \"rewind,530,90,rect,120,30\"\noverlay2_desc5 = \"slowmotion,530,170,rect,120,30\"\noverlay2_desc7 = \"toggle_fast_forward,530,250,rect,120,300\"\noverlay2_desc9 = \"shader_prev,530,330,rect,120,30\"\noverlay2_desc8 = \"shader_next,550,410,rect,100,30\"\noverlay2_desc10 = \"overlay_next,400,460,rect,40,20\"\n\noverlay3_descs = 1\noverlay3_rect = \"0.4375,0.916,0.125,0.084\"\noverlay3_desc0 = \"overlay_next,50,20,rect,50,20\""
    },
    {
        "name": "Box Ps With Diagonals",
        "path": "gamepads/old/box-ps-with-diagonals.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/ps.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/ps_portrait.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/ps_quickmenu.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 3",
                "image": "gamepads/old/ps_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\n\noverlay0_overlay = ps.png\noverlay1_overlay = ps_portrait.png\noverlay2_overlay = ps_quickmenu.png\noverlay3_overlay = ps_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\noverlay2_full_screen = true\noverlay3_full_screen = true\n\noverlay0_descs = 19\noverlay0_desc0 = \"left,35,385,radial,42,42\"\noverlay0_desc1 = \"right,155,385,radial,42,42\"\noverlay0_desc2 = \"up,95,325,radial,42,42\"\noverlay0_desc3 = \"down,95,445,radial,42,42\"\noverlay0_desc4 = \"start,515,455,rect,35,25\"\noverlay0_desc5 = \"select,285,455,rect,35,25\"\noverlay0_desc6 = \"a,765,385,radial,35,35\"\noverlay0_desc7 = \"b,705,445,radial,35,35\"\noverlay0_desc8 = \"x,705,325,radial,35,35\"\noverlay0_desc9 = \"y,645,385,radial,35,35\"\noverlay0_desc10 = \"l,50,85,rect,50,25\"\noverlay0_desc11 = \"l2,50,25,rect,50,25\"\noverlay0_desc12 = \"r,750,85,rect,50,25\"\noverlay0_desc13 = \"r2,750,25,rect,50,25\"\noverlay0_desc14 = \"left|up,30,320,rect,30,30\"\noverlay0_desc15 = \"right|up,160,320,rect,30,30\"\noverlay0_desc16 = \"left|down,30,450,rect,30,30\"\noverlay0_desc17 = \"right|down,160,450,rect,30,30\"\noverlay0_desc18 = \"overlay_next,400,455,radial,30,30\"\n\noverlay1_descs = 19\noverlay1_desc0 = \"left,35,665,radial,42,42\"\noverlay1_desc1 = \"right,155,665,radial,42,42\"\noverlay1_desc2 = \"up,95,605,radial,42,42\"\noverlay1_desc3 = \"down,95,725,radial,42,42\"\noverlay1_desc4 = \"start,300,460,rect,30,30\"\noverlay1_desc5 = \"select,180,460,rect,30,30\"\noverlay1_desc6 = \"a,445,665,radial,35,35\"\noverlay1_desc7 = \"b,385,725,radial,35,35\"\noverlay1_desc8 = \"x,385,605,radial,35,35\"\noverlay1_desc9 = \"y,325,665,radial,35,35\"\noverlay1_desc10 = \"l,50,485,rect,50,25\"\noverlay1_desc11 = \"l2,50,425,rect,50,25\"\noverlay1_desc12 = \"r,430,485,rect,50,25\"\noverlay1_desc13 = \"r2,430,425,rect,50,25\"\noverlay1_desc14 = \"left|up,30,600,rect,30,30\"\noverlay1_desc15 = \"right|up,160,600,rect,30,30\"\noverlay1_desc16 = \"left|down,30,730,rect,30,30\"\noverlay1_desc17 = \"right|down,160,730,rect,30,30\"\noverlay1_desc18 = \"overlay_next,240,550,radial,30,30\"\n\noverlay2_descs = 11\noverlay2_desc0 = \"load_state,270,90,rect,120,30\"\noverlay2_desc1 = \"save_state,270,170,rect,120,30\"\noverlay2_desc3 = \"state_slot_increase,270,250,rect,120,30\"\noverlay2_desc2 = \"state_slot_decrease,270,330,rect,120,30\"\noverlay2_desc6 = \"reset,250,410,rect,100,30\"\noverlay2_desc4 = \"rewind,530,90,rect,120,30\"\noverlay2_desc5 = \"slowmotion,530,170,rect,120,30\"\noverlay2_desc7 = \"toggle_fast_forward,530,250,rect,120,300\"\noverlay2_desc9 = \"shader_prev,530,330,rect,120,30\"\noverlay2_desc8 = \"shader_next,550,410,rect,100,30\"\noverlay2_desc10 = \"overlay_next,400,460,rect,40,20\"\n\noverlay3_descs = 1\noverlay3_rect = \"0.4375,0.916,0.125,0.084\"\noverlay3_desc0 = \"overlay_next,50,20,rect,50,20\""
    },
    {
        "name": "Box Psx",
        "path": "gamepads/old/box-psx.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/ps.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/ps_portrait.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/ps_quickmenu.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 3",
                "image": "gamepads/old/ps_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 4\n\noverlay0_overlay = ps.png\noverlay1_overlay = ps_portrait.png\noverlay2_overlay = ps_quickmenu.png\noverlay3_overlay = ps_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\noverlay2_full_screen = true\noverlay3_full_screen = true\n\noverlay0_descs = 15\noverlay0_desc0 = \"left,35,385,radial,42,42\"\noverlay0_desc1 = \"right,155,385,radial,42,42\"\noverlay0_desc2 = \"up,95,325,radial,42,42\"\noverlay0_desc3 = \"down,95,445,radial,42,42\"\noverlay0_desc4 = \"start,515,455,rect,35,25\"\noverlay0_desc5 = \"select,285,455,rect,35,25\"\noverlay0_desc6 = \"a,765,385,radial,35,35\"\noverlay0_desc7 = \"b,705,445,radial,35,35\"\noverlay0_desc8 = \"x,705,325,radial,35,35\"\noverlay0_desc9 = \"y,645,385,radial,35,35\"\noverlay0_desc10 = \"l,50,85,rect,50,25\"\noverlay0_desc11 = \"l2,50,25,rect,50,25\"\noverlay0_desc12 = \"r,750,85,rect,50,25\"\noverlay0_desc13 = \"r2,750,25,rect,50,25\"\noverlay0_desc14 = \"overlay_next,400,455,radial,30,30\"\n\noverlay1_descs = 15\noverlay1_desc0 = \"left,35,665,radial,42,42\"\noverlay1_desc1 = \"right,155,665,radial,42,42\"\noverlay1_desc2 = \"up,95,605,radial,42,42\"\noverlay1_desc3 = \"down,95,725,radial,42,42\"\noverlay1_desc4 = \"start,300,460,rect,30,30\"\noverlay1_desc5 = \"select,180,460,rect,30,30\"\noverlay1_desc6 = \"a,445,665,radial,35,35\"\noverlay1_desc7 = \"b,385,725,radial,35,35\"\noverlay1_desc8 = \"x,385,605,radial,35,35\"\noverlay1_desc9 = \"y,325,665,radial,35,35\"\noverlay1_desc10 = \"l,50,485,rect,50,25\"\noverlay1_desc11 = \"l2,50,425,rect,50,25\"\noverlay1_desc12 = \"r,430,485,rect,50,25\"\noverlay1_desc13 = \"r2,430,425,rect,50,25\"\noverlay1_desc14 = \"overlay_next,240,550,radial,30,30\"\n\noverlay2_descs = 11\noverlay2_desc0 = \"load_state,270,90,rect,120,30\"\noverlay2_desc1 = \"save_state,270,170,rect,120,30\"\noverlay2_desc3 = \"state_slot_increase,270,250,rect,120,30\"\noverlay2_desc2 = \"state_slot_decrease,270,330,rect,120,30\"\noverlay2_desc6 = \"reset,250,410,rect,100,30\"\noverlay2_desc4 = \"rewind,530,90,rect,120,30\"\noverlay2_desc5 = \"slowmotion,530,170,rect,120,30\"\noverlay2_desc7 = \"toggle_fast_forward,530,250,rect,120,300\"\noverlay2_desc9 = \"shader_prev,530,330,rect,120,30\"\noverlay2_desc8 = \"shader_next,550,410,rect,100,30\"\noverlay2_desc10 = \"overlay_next,400,460,rect,40,20\"\n\noverlay3_descs = 1\noverlay3_rect = \"0.4375,0.916,0.125,0.084\"\noverlay3_desc0 = \"overlay_next,50,20,rect,50,20\""
    },
    {
        "name": "Gameboy Landscape",
        "path": "gamepads/old/gameboy-landscape.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/gameboy-landscape.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/nintendo_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/nintendo_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = gameboy-landscape.png\noverlay1_overlay = nintendo_quickmenu_small.png\noverlay2_overlay = nintendo_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\n\noverlay0_descs = 14\noverlay0_desc0 = \"left,12,389,rect,50,40\"\noverlay0_desc1 = \"right,134,389,rect,50,40\"\noverlay0_desc2 = \"up,76,334,rect,40,50\"\noverlay0_desc3 = \"down,76,444,rect,40,50\"\noverlay0_desc4  = \"select,730,115,rect,30,30\"\noverlay0_desc5  = \"start,730,48,rect,30,30\"\noverlay0_desc6 = \"b,690,418,radial,46,46\"\noverlay0_desc7 = \"a,772,370,radial,46,46\"\noverlay0_desc8 = \"overlay_next,731,239,radial,30,30\"\noverlay0_desc9 = \"left|up,10,324,radial,22,22\"\noverlay0_desc10 = \"left|down,10,454,radial,22,22\"\noverlay0_desc11 = \"right|up,140,324,radial,22,22\"\noverlay0_desc12 = \"right|down,140,454,radial,22,22\"\noverlay0_desc13 = \"menu_toggle,73,49,radial,20,20\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,292,53,rect,50,38\"\noverlay1_desc1  = \"save_state,505,53,rect,50,38\"\noverlay1_desc2  = \"state_slot_decrease,292,222,rect,50,38\"\noverlay1_desc3  = \"state_slot_increase,505,222,rect,50,38\"\noverlay1_desc4  = \"rewind,292,306,rect,50,38\"\noverlay1_desc5  = \"slowmotion,292,393,rect,50,38\"\noverlay1_desc6  = \"reset,505,393,rect,50,38\"\noverlay1_desc7  = \"toggle_fast_forward,505,306,rect,50,38\"\noverlay1_desc8  = \"shader_next,505,136,rect,50,38\"\noverlay1_desc9  = \"shader_prev,292,136,rect,50,38\"\noverlay1_desc10 = \"overlay_next,400,452,radial,22,22\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.47,0.9,0.07,0.08\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Gameboy Portrait",
        "path": "gamepads/old/gameboy-portrait.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/gameboy-portrait.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/nintendo_quickmenu_small2.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/nintendo_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = gameboy-portrait.png\noverlay1_overlay = nintendo_quickmenu_small2.png\noverlay2_overlay = nintendo_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\noverlay2_full_screen = true\n\noverlay0_descs = 14\noverlay0_desc0  = \"left,42,700,rect,56,46\"\noverlay0_desc1  = \"right,148,700,rect,56,46\"\noverlay0_desc2  = \"up,96,646,rect,46,56\"\noverlay0_desc3  = \"down,96,758,rect,46,56\"\noverlay0_desc4  = \"select,55,491,rect,40,40\"\noverlay0_desc5  = \"start,423,491,rect,40,40\"\noverlay0_desc6 = \"b,317,726,radial,65,65\"\noverlay0_desc7 = \"a,420,655,radial,65,65\"\noverlay0_desc8 = \"overlay_next,240,490,radial,30,30\"\noverlay0_desc9 = \"left|up,24,634,radial,45,45\"\noverlay0_desc10 = \"left|down,24,772,radial,45,45\"\noverlay0_desc11 = \"right|up,160,634,radial,45,45\"\noverlay0_desc12 = \"right|down,160,772,radial,45,45\"\noverlay0_desc13 = \"menu_toggle,240,595,rect,40,28\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,120,52,rect,110,45\"\noverlay1_desc1  = \"save_state,360,52,rect,110,45\"\noverlay1_desc2  = \"state_slot_decrease,120,167,rect,110,45\"\noverlay1_desc3  = \"state_slot_increase,360,167,rect,110,45\"\noverlay1_desc4  = \"rewind,120,276,rect,110,45\"\noverlay1_desc5  = \"toggle_fast_forward,360,276,rect,110,45\"\noverlay1_desc6  = \"shader_prev,120,389,rect,110,45\"\noverlay1_desc7  = \"shader_next,360,389,rect,110,45\"\noverlay1_desc8  = \"slowmotion,120,504,rect,110,45\"\noverlay1_desc9  = \"reset,360,504,rect,110,45\"\noverlay1_desc10 = \"overlay_next,240,683,radial,25,25\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.47,0.9,0.11,0.08\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Genesis3 Landscape",
        "path": "gamepads/old/genesis3-landscape.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/genesis3-landscape.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/genesis_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/genesis_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = genesis3-landscape.png\noverlay1_overlay = genesis_quickmenu_small.png\noverlay2_overlay = genesis_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\n\noverlay0_descs = 14\noverlay0_desc0 = \"left,12,389,rect,50,40\"\noverlay0_desc1 = \"right,134,389,rect,50,40\"\noverlay0_desc2 = \"up,76,334,rect,40,50\"\noverlay0_desc3 = \"down,76,444,rect,40,50\"\noverlay0_desc4 = \"start,730,48,rect,30,30\"\noverlay0_desc5 = \"a,764,388,rect,30,30\"\noverlay0_desc6 = \"b,697,412,radial,30,30\"\noverlay0_desc7 = \"y,634,439,radial,30,30\"\noverlay0_desc8 = \"overlay_next,728,186,radial,30,30\"\noverlay0_desc9 = \"left|up,10,324,radial,22,22\"\noverlay0_desc10 = \"left|down,10,454,radial,22,22\"\noverlay0_desc11 = \"right|up,140,324,radial,22,22\"\noverlay0_desc12 = \"right|down,140,454,radial,22,22\"\noverlay0_desc13 = \"menu_toggle,73,50,radial,20,20\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,292,53,rect,50,38\"\noverlay1_desc1  = \"save_state,505,53,rect,50,38\"\noverlay1_desc2  = \"state_slot_decrease,292,222,rect,50,38\"\noverlay1_desc3  = \"state_slot_increase,505,222,rect,50,38\"\noverlay1_desc4  = \"rewind,292,306,rect,50,38\"\noverlay1_desc5  = \"slowmotion,292,393,rect,50,38\"\noverlay1_desc6  = \"reset,505,393,rect,50,38\"\noverlay1_desc7  = \"toggle_fast_forward,505,306,rect,50,38\"\noverlay1_desc8  = \"shader_next,505,136,rect,50,38\"\noverlay1_desc9  = \"shader_prev,292,136,rect,50,38\"\noverlay1_desc10 = \"overlay_next,400,452,radial,22,22\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.47,0.9,0.07,0.08\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Genesis3 Portrait",
        "path": "gamepads/old/genesis3-portrait.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/genesis3-portrait.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/genesis_quickmenu_small2.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/genesis_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = genesis3-portrait.png\noverlay1_overlay = genesis_quickmenu_small2.png\noverlay2_overlay = genesis_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\noverlay2_full_screen = true\n\noverlay0_descs = 14\noverlay0_desc0 = \"left,42,700,rect,56,46\"\noverlay0_desc1 = \"right,148,700,rect,56,46\"\noverlay0_desc2 = \"up,96,646,rect,46,56\"\noverlay0_desc3 = \"down,96,758,rect,46,56\"\noverlay0_desc4 = \"start,427,507,rect,40,40\"\noverlay0_desc5 = \"a,445,715,radial,35,55\"\noverlay0_desc6 = \"b,374,736,radial,35,55\"\noverlay0_desc7 = \"y,301,755,rect,35,55\"\noverlay0_desc8 = \"overlay_next,107,508,radial,40,40\"\noverlay0_desc9 = \"left|up,24,634,radial,45,45\"\noverlay0_desc10 = \"left|down,24,772,radial,45,45\"\noverlay0_desc11 = \"right|up,160,634,radial,45,45\"\noverlay0_desc12 = \"right|down,160,772,radial,45,45\"\noverlay0_desc13 = \"menu_toggle,240,575,rect,40,28\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,120,52,rect,110,45\"\noverlay1_desc1  = \"save_state,360,52,rect,110,45\"\noverlay1_desc2  = \"state_slot_decrease,120,167,rect,110,45\"\noverlay1_desc3  = \"state_slot_increase,360,167,rect,110,45\"\noverlay1_desc4  = \"rewind,120,276,rect,110,45\"\noverlay1_desc5  = \"toggle_fast_forward,360,276,rect,110,45\"\noverlay1_desc6  = \"shader_prev,120,389,rect,110,45\"\noverlay1_desc7  = \"shader_next,360,389,rect,110,45\"\noverlay1_desc8  = \"slowmotion,120,504,rect,110,45\"\noverlay1_desc9  = \"reset,360,504,rect,110,45\"\noverlay1_desc10 = \"overlay_next,240,683,radial,30,30\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.47,0.9,0.11,0.08\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Genesis6 Landscape",
        "path": "gamepads/old/genesis6-landscape.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/genesis6-landscape.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/genesis_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/genesis_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = genesis6-landscape.png\noverlay1_overlay = genesis_quickmenu_small.png\noverlay2_overlay = genesis_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\n\noverlay0_descs = 17\noverlay0_desc0 = \"left,12,389,rect,50,40\"\noverlay0_desc1 = \"right,134,389,rect,50,40\"\noverlay0_desc2 = \"up,76,334,rect,40,50\"\noverlay0_desc3 = \"down,76,444,rect,40,50\"\noverlay0_desc4 = \"start,730,48,rect,30,30\"\noverlay0_desc5 = \"a,764,388,rect,26,26\"\noverlay0_desc6 = \"b,697,412,radial,26,26\"\noverlay0_desc7 = \"y,634,439,radial,26,26\"\noverlay0_desc8 = \"l,608,374,rect,24,24\"\noverlay0_desc9 = \"x,670,350,radial,24,24\"\noverlay0_desc10 = \"r,736,326,radial,24,17\"\noverlay0_desc11 = \"overlay_next,728,186,radial,30,30\"\noverlay0_desc12 = \"left|up,10,324,radial,22,22\"\noverlay0_desc13 = \"left|down,10,454,radial,22,22\"\noverlay0_desc14 = \"right|up,140,324,radial,22,22\"\noverlay0_desc15 = \"right|down,140,454,radial,22,22\"\noverlay0_desc16 = \"menu_toggle,73,50,radial,20,20\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,292,53,rect,50,38\"\noverlay1_desc1  = \"save_state,505,53,rect,50,38\"\noverlay1_desc2  = \"state_slot_decrease,292,222,rect,50,38\"\noverlay1_desc3  = \"state_slot_increase,505,222,rect,50,38\"\noverlay1_desc4  = \"rewind,292,306,rect,50,38\"\noverlay1_desc5  = \"slowmotion,292,393,rect,50,38\"\noverlay1_desc6  = \"reset,505,393,rect,50,38\"\noverlay1_desc7  = \"toggle_fast_forward,505,306,rect,50,38\"\noverlay1_desc8  = \"shader_next,505,136,rect,50,38\"\noverlay1_desc9  = \"shader_prev,292,136,rect,50,38\"\noverlay1_desc10 = \"overlay_next,400,452,radial,22,22\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.47,0.9,0.07,0.08\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Genesis6 Portrait",
        "path": "gamepads/old/genesis6-portrait.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/genesis6-portrait.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/genesis_quickmenu_small2.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/genesis_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = genesis6-portrait.png\noverlay1_overlay = genesis_quickmenu_small2.png\noverlay2_overlay = genesis_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\noverlay2_full_screen = true\n\noverlay0_descs = 17\noverlay0_desc0 = \"left,42,700,rect,56,46\"\noverlay0_desc1 = \"right,148,700,rect,56,46\"\noverlay0_desc2 = \"up,96,646,rect,46,56\"\noverlay0_desc3 = \"down,96,758,rect,46,56\"\noverlay0_desc4 = \"start,427,507,rect,40,40\"\noverlay0_desc5 = \"a,449,720,radial,25,25\"\noverlay0_desc6 = \"b,374,736,radial,25,25\"\noverlay0_desc7 = \"y,301,755,rect,25,25\"\noverlay0_desc8 = \"l,283,684,rect,21,21\"\noverlay0_desc9 = \"x,352,666,radial,21,21\"\noverlay0_desc10 = \"r,426,648,radial,21,21\"\noverlay0_desc11 = \"overlay_next,107,508,radial,40,40\"\noverlay0_desc12 = \"left|up,24,634,radial,45,45\"\noverlay0_desc13 = \"left|down,24,772,radial,45,45\"\noverlay0_desc14 = \"right|up,160,634,radial,45,45\"\noverlay0_desc15 = \"right|down,160,772,radial,45,45\"\noverlay0_desc16 = \"menu_toggle,240,575,rect,40,28\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,120,52,rect,110,45\"\noverlay1_desc1  = \"save_state,360,52,rect,110,45\"\noverlay1_desc2  = \"state_slot_decrease,120,167,rect,110,45\"\noverlay1_desc3  = \"state_slot_increase,360,167,rect,110,45\"\noverlay1_desc4  = \"rewind,120,276,rect,110,45\"\noverlay1_desc5  = \"toggle_fast_forward,360,276,rect,110,45\"\noverlay1_desc6  = \"shader_prev,120,389,rect,110,45\"\noverlay1_desc7  = \"shader_next,360,389,rect,110,45\"\noverlay1_desc8  = \"slowmotion,120,504,rect,110,45\"\noverlay1_desc9  = \"reset,360,504,rect,110,45\"\noverlay1_desc10 = \"overlay_next,240,683,radial,30,30\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.47,0.9,0.11,0.08\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Lynx Landscape",
        "path": "gamepads/old/lynx-landscape.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/lynx-landscape.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 1\n\noverlay0_overlay = lynx-landscape.png\n\noverlay0_full_screen = true\n\noverlay0_descs = 14\noverlay0_desc0 = \"left,12,389,rect,50,40\"\noverlay0_desc1 = \"right,134,389,rect,50,40\"\noverlay0_desc2 = \"up,76,334,rect,40,50\"\noverlay0_desc3 = \"down,76,444,rect,40,50\"\noverlay0_desc4  = \"l,761,41,radial,30,30\"\noverlay0_desc5  = \"r,761,128,radial,30,30\"\noverlay0_desc6 = \"b,641,397,radial,46,46\"\noverlay0_desc7 = \"a,736,371,radial,46,46\"\noverlay0_desc8 = \"left|up,10,324,radial,22,22\"\noverlay0_desc9 = \"left|down,10,454,radial,22,22\"\noverlay0_desc10 = \"right|up,140,324,radial,22,22\"\noverlay0_desc11 = \"right|down,140,454,radial,22,22\"\noverlay0_desc12 = \"menu_toggle,34,34,radial,20,20\"\noverlay0_desc13  = \"start,763,84,radial,30,30\"\n"
    },
    {
        "name": "Nes Landscape",
        "path": "gamepads/old/nes-landscape.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/nes-landscape.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/nintendo_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/nintendo_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = nes-landscape.png\noverlay1_overlay = nintendo_quickmenu_small.png\noverlay2_overlay = nintendo_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\n\noverlay0_descs = 14\noverlay0_desc0 = \"left,12,388,rect,50,36\"\noverlay0_desc1 = \"right,134,388,rect,50,36\"\noverlay0_desc2 = \"up,76,334,rect,40,50\"\noverlay0_desc3 = \"down,76,444,rect,40,50\"\noverlay0_desc4  = \"select,54,35,rect,45,20\"\noverlay0_desc5  = \"start,745,35,rect,45,20\"\noverlay0_desc6 = \"b,685,424,radial,46,46\"\noverlay0_desc7 = \"a,759,424,radial,46,46\"\noverlay0_desc8 = \"overlay_next,743,204,radial,30,30\"\noverlay0_desc9 = \"left|up,10,328,radial,26,26\"\noverlay0_desc10 = \"left|down,10,454,radial,26,26\"\noverlay0_desc11 = \"right|up,140,328,radial,26,26\"\noverlay0_desc12 = \"right|down,140,454,radial,26,26\"\noverlay0_desc13 = \"menu_toggle,76,205,radial,20,20\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,292,53,rect,50,38\"\noverlay1_desc1  = \"save_state,505,53,rect,50,38\"\noverlay1_desc2  = \"state_slot_decrease,292,222,rect,50,38\"\noverlay1_desc3  = \"state_slot_increase,505,222,rect,50,38\"\noverlay1_desc4  = \"rewind,292,306,rect,50,38\"\noverlay1_desc5  = \"slowmotion,292,393,rect,50,38\"\noverlay1_desc6  = \"reset,505,393,rect,50,38\"\noverlay1_desc7  = \"toggle_fast_forward,505,306,rect,50,38\"\noverlay1_desc8  = \"shader_next,505,136,rect,50,38\"\noverlay1_desc9  = \"shader_prev,292,136,rect,50,38\"\noverlay1_desc10 = \"overlay_next,400,452,radial,22,22\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.47,0.9,0.07,0.08\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Nes Portrait",
        "path": "gamepads/old/nes-portrait.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/nes-portrait.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/nintendo_quickmenu_small2.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/nintendo_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = nes-portrait.png\noverlay1_overlay = nintendo_quickmenu_small2.png\noverlay2_overlay = nintendo_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\noverlay2_full_screen = true\n\noverlay0_descs = 14\noverlay0_desc0 = \"left,42,700,rect,56,46\"\noverlay0_desc1 = \"right,148,700,rect,56,46\"\noverlay0_desc2 = \"up,96,646,rect,46,56\"\noverlay0_desc3 = \"down,96,758,rect,46,56\"\noverlay0_desc4 = \"select,55,485,rect,45,20\"\noverlay0_desc5 = \"start,425,485,rect,45,20\"\noverlay0_desc6 = \"b,309,698,radial,48,54\"\noverlay0_desc7 = \"a,424,698,radial,48,54\"\noverlay0_desc8 = \"overlay_next,241,492,radial,30,30\"\noverlay0_desc9 = \"left|up,28,638,radial,45,45\"\noverlay0_desc10 = \"left|down,28,768,radial,45,45\"\noverlay0_desc11 = \"right|up,160,638,radial,45,45\"\noverlay0_desc12 = \"right|down,160,768,radial,45,45\"\noverlay0_desc13 = \"menu_toggle,240,595,rect,40,28\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,120,52,rect,110,45\"\noverlay1_desc1  = \"save_state,360,52,rect,110,45\"\noverlay1_desc2  = \"state_slot_decrease,120,167,rect,110,45\"\noverlay1_desc3  = \"state_slot_increase,360,167,rect,110,45\"\noverlay1_desc4  = \"rewind,120,276,rect,110,45\"\noverlay1_desc5  = \"toggle_fast_forward,360,276,rect,110,45\"\noverlay1_desc6  = \"shader_prev,120,389,rect,110,45\"\noverlay1_desc7  = \"shader_next,360,389,rect,110,45\"\noverlay1_desc8  = \"slowmotion,120,504,rect,110,45\"\noverlay1_desc9  = \"reset,360,504,rect,110,45\"\noverlay1_desc10 = \"overlay_next,240,683,radial,25,25\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.47,0.9,0.11,0.08\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Psx Landscape",
        "path": "gamepads/old/psx-landscape.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/psx-landscape.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/psx_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/psx_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = psx-landscape.png\noverlay1_overlay = psx_quickmenu_small.png\noverlay2_overlay = psx_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\n\noverlay0_descs = 20\noverlay0_desc0 = \"left,8,384,rect,50,40\"\noverlay0_desc1 = \"right,134,384,rect,50,40\"\noverlay0_desc2 = \"up,72,334,rect,40,50\"\noverlay0_desc3 = \"down,72,444,rect,40,50\"\noverlay0_desc4 = \"start,434,33,rect,30,17\"\noverlay0_desc5 = \"select,369,33,rect,30,17\"\noverlay0_desc6 = \"a,776,390,radial,30,30\"\noverlay0_desc7 = \"b,726,438,radial,30,30\"\noverlay0_desc8 = \"x,726,338,radial,30,30\"\noverlay0_desc9 = \"y,677,390,radial,30,30\"\noverlay0_desc10 = \"l,71,110,rect,47,27\"\noverlay0_desc11 = \"l2,70,37,rect,47,27\"\noverlay0_desc12 = \"r,730,110,rect,47,27\"\noverlay0_desc13 = \"r2,730,37,rect,47,27\"\noverlay0_desc14 = \"overlay_next,401,437,radial,20,20\"\noverlay0_desc15 = \"left|up,10,324,radial,28,28\"\noverlay0_desc16 = \"left|down,10,454,radial,28,28\"\noverlay0_desc17 = \"right|up,140,324,radial,28,28\"\noverlay0_desc18 = \"right|down,140,454,radial,28,28\"\noverlay0_desc19 = \"menu_toggle,732,217,rect,25,20\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,102,48,rect,90,30\"\noverlay1_desc1  = \"save_state,694,48,rect,90,30\"\noverlay1_desc2  = \"state_slot_decrease,102,132,rect,90,30\"\noverlay1_desc3  = \"state_slot_increase,694,132,rect,90,30\"\noverlay1_desc4  = \"rewind,102,215,rect,90,30\"\noverlay1_desc5  = \"slowmotion,102,388,rect,90,30\"\noverlay1_desc6  = \"reset,694,388,rect,90,30\"\noverlay1_desc7  = \"toggle_fast_forward,694,215,rect,90,30\"\noverlay1_desc8  = \"shader_next,694,303,rect,90,30\"\noverlay1_desc9  = \"shader_prev,102,303,rect,90,30\"\noverlay1_desc10 = \"overlay_next,403,453,radial,25,25\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.47,0.9,0.07,0.08\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Psx Portrait",
        "path": "gamepads/old/psx-portrait.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/psx-portrait.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/psx_quickmenu_small2.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/psx_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = psx-portrait.png\noverlay1_overlay = psx_quickmenu_small2.png\noverlay2_overlay = psx_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\noverlay2_full_screen = true\n\noverlay0_descs = 20\noverlay0_desc0 = \"left,42,700,rect,56,46\"\noverlay0_desc1 = \"right,148,700,rect,56,46\"\noverlay0_desc2 = \"up,96,646,rect,46,56\"\noverlay0_desc3 = \"down,96,758,rect,46,56\"\noverlay0_desc4 = \"start,286,497,rect,35,17\"\noverlay0_desc5 = \"select,197,497,rect,35,17\"\noverlay0_desc6 = \"a,436,699,radial,35,35\"\noverlay0_desc7 = \"b,376,759,radial,35,35\"\noverlay0_desc8 = \"x,376,633,radial,35,35\"\noverlay0_desc9 = \"y,318,699,radial,35,35\"\noverlay0_desc10 = \"l,50,537,rect,50,27\"\noverlay0_desc11 = \"l2,50,479,rect,50,27\"\noverlay0_desc12 = \"r,430,537,rect,50,27\"\noverlay0_desc13 = \"r2,430,479,rect,50,27\"\noverlay0_desc14 = \"overlay_next,240,578,radial,30,30\"\noverlay0_desc15 = \"left|up,20,638,radial,45,45\"\noverlay0_desc16 = \"left|down,20,768,radial,45,45\"\noverlay0_desc17 = \"right|up,160,638,radial,45,45\"\noverlay0_desc18 = \"right|down,166,768,radial,45,45\"\noverlay0_desc19 = \"menu_toggle,240,764,rect,25,20\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,120,52,rect,110,45\"\noverlay1_desc1  = \"save_state,360,52,rect,110,45\"\noverlay1_desc2  = \"state_slot_decrease,120,167,rect,110,45\"\noverlay1_desc3  = \"state_slot_increase,360,167,rect,110,45\"\noverlay1_desc4  = \"rewind,120,276,rect,110,45\"\noverlay1_desc5  = \"toggle_fast_forward,360,276,rect,110,45\"\noverlay1_desc6  = \"shader_prev,120,389,rect,110,45\"\noverlay1_desc7  = \"shader_next,360,389,rect,110,45\"\noverlay1_desc8  = \"slowmotion,120,504,rect,110,45\"\noverlay1_desc9  = \"reset,360,504,rect,110,45\"\noverlay1_desc10 = \"overlay_next,240,683,radial,25,25\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.47,0.9,0.11,0.08\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Snes Landscape",
        "path": "gamepads/old/snes-landscape.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/snes-landscape.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/nintendo_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/nintendo_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = snes-landscape.png\noverlay1_overlay = nintendo_quickmenu_small.png\noverlay2_overlay = nintendo_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\n\noverlay0_descs = 18\noverlay0_desc0 = \"left,12,389,rect,56,46\"\noverlay0_desc1 = \"right,134,389,rect,56,46\"\noverlay0_desc2 = \"up,71,334,rect,46,56\"\noverlay0_desc3 = \"down,71,444,rect,46,56\"\noverlay0_desc4 = \"select,71,218,rect,30,30\"\noverlay0_desc5 = \"start,71,148,rect,30,30\"\noverlay0_desc6 = \"b,707,444,radial,50,50\"\noverlay0_desc7 = \"a,774,386,radial,50,50\"\noverlay0_desc8 = \"x,707,320,radial,50,50\"\noverlay0_desc9 = \"y,636,386,radial,50,50\"\noverlay0_desc10 = \"l,70,31,rect,70,30\"\noverlay0_desc11 = \"r,731,31,rect,70,30\"\noverlay0_desc12 = \"overlay_next,730,171,radial,30,30\"\noverlay0_desc13 = \"left|up,18,324,radial,28,28\"\noverlay0_desc14 = \"left|down,18,454,radial,28,28\"\noverlay0_desc15 = \"right|up,140,324,radial,28,28\"\noverlay0_desc16 = \"right|down,140,454,radial,28,28\"\noverlay0_desc17 = \"menu_toggle,401,443,radial,20,20\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,292,53,rect,50,38\"\noverlay1_desc1  = \"save_state,505,53,rect,50,38\"\noverlay1_desc2  = \"state_slot_decrease,292,222,rect,50,38\"\noverlay1_desc3  = \"state_slot_increase,505,222,rect,50,38\"\noverlay1_desc4  = \"rewind,292,306,rect,50,38\"\noverlay1_desc5  = \"slowmotion,292,393,rect,50,38\"\noverlay1_desc6  = \"reset,505,393,rect,50,38\"\noverlay1_desc7  = \"toggle_fast_forward,505,306,rect,50,38\"\noverlay1_desc8  = \"shader_next,505,136,rect,50,38\"\noverlay1_desc9  = \"shader_prev,292,136,rect,50,38\"\noverlay1_desc10 = \"overlay_next,400,452,radial,22,22\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.47,0.9,0.07,0.08\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Snes Portrait",
        "path": "gamepads/old/snes-portrait.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/snes-portrait.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/nintendo_quickmenu_small2.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/nintendo_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = snes-portrait.png\noverlay1_overlay = nintendo_quickmenu_small2.png\noverlay2_overlay = nintendo_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\noverlay2_full_screen = true\n\noverlay0_descs = 18\noverlay0_desc0 = \"left,42,700,rect,56,46\"\noverlay0_desc1 = \"right,148,700,rect,56,46\"\noverlay0_desc2 = \"up,96,646,rect,46,56\"\noverlay0_desc3 = \"down,96,758,rect,46,56\"\noverlay0_desc4 = \"select,206,494,rect,30,30\"\noverlay0_desc5 = \"start,285,494,rect,30,30\"\noverlay0_desc6 = \"b,372,756,radial,90,90\"\noverlay0_desc7 = \"a,446,686,radial,90,90\"\noverlay0_desc8 = \"x,370,622,radial,90,90\"\noverlay0_desc9 = \"y,296,692,radial,90,90\"\noverlay0_desc10 = \"l,70,482,rect,70,30\"\noverlay0_desc11 = \"r,410,482,rect,70,30\"\noverlay0_desc12 = \"overlay_next,241,587,radial,30,30\"\noverlay0_desc13 = \"left|up,28,638,radial,45,45\"\noverlay0_desc14 = \"left|down,28,768,radial,45,45\"\noverlay0_desc15 = \"right|up,160,638,radial,45,45\"\noverlay0_desc16 = \"right|down,160,768,radial,45,45\"\noverlay0_desc17 = \"menu_toggle,240,760,radial,20,20\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,120,52,rect,110,45\"\noverlay1_desc1  = \"save_state,360,52,rect,110,45\"\noverlay1_desc2  = \"state_slot_decrease,120,167,rect,110,45\"\noverlay1_desc3  = \"state_slot_increase,360,167,rect,110,45\"\noverlay1_desc4  = \"rewind,120,276,rect,110,45\"\noverlay1_desc5  = \"toggle_fast_forward,360,276,rect,110,45\"\noverlay1_desc6  = \"shader_prev,120,389,rect,110,45\"\noverlay1_desc7  = \"shader_next,360,389,rect,110,45\"\noverlay1_desc8  = \"slowmotion,120,504,rect,110,45\"\noverlay1_desc9  = \"reset,360,504,rect,110,45\"\noverlay1_desc10 = \"overlay_next,240,683,radial,25,25\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.47,0.9,0.11,0.08\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Basic_Overlay",
        "path": "gamepads/old/Low-resolution/basic_overlay.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/Low-resolution/basic_overlay.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/Low-resolution/basic_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/Low-resolution/basic_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = basic_overlay.png\noverlay1_overlay = basic_quickmenu_small.png\noverlay2_overlay = basic_next.png\n\noverlay0_full_screen = true\n\noverlay0_descs = 15\noverlay0_desc0  = \"left,15,210,rect,10,30\"\noverlay0_desc1  = \"right,60,210,rect,10,30\"\noverlay0_desc2  = \"up,38,188,rect,30,10\"\noverlay0_desc3  = \"down,38,231,rect,30,10\"\noverlay0_desc4  = \"l,8,113,radial,20,20\"\noverlay0_desc5  = \"l2,8,59,radial,20,20\"\noverlay0_desc6  = \"r,246,113,radial,20,20\"\noverlay0_desc7  = \"r2,246,59,radial,20,20\"\noverlay0_desc8  = \"select,91,168,radial,10,10\"\noverlay0_desc9  = \"start,134,168,radial,10,10\"\noverlay0_desc10 = \"b,200,237,radial,30,30\"\noverlay0_desc11 = \"a,234,210,radial,30,30\"\noverlay0_desc12 = \"x,200,180,radial,30,30\"\noverlay0_desc13 = \"y,163,210,radial,30,30\"\noverlay0_desc14 = \"overlay_next,116,240,radial,16,16\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,60,39,rect,50,20\"\noverlay1_desc1  = \"save_state,163,39,rect,50,20\"\noverlay1_desc2  = \"state_slot_decrease,60,81,rect,50,20\"\noverlay1_desc3  = \"state_slot_increase,163,81,rect,50,20\"\noverlay1_desc4  = \"rewind,60,123,rect,50,20\"\noverlay1_desc5  = \"slowmotion,163,123,rect,50,20\"\noverlay1_desc6  = \"reset,60,165,rect,50,20\"\noverlay1_desc7  = \"toggle_fast_forward,163,165,rect,50,20\"\noverlay1_desc8  = \"shader_next,60,207,rect,50,20\"\noverlay1_desc9  = \"shader_prev,163,207,rect,50,20\"\noverlay1_desc10 = \"overlay_next,116,240,radial,16,16\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.44,0.85,0.12,0.12\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Basic_Overlay_Portrait",
        "path": "gamepads/old/Low-resolution/basic_overlay_portrait.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/Low-resolution/basic_overlay.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/Low-resolution/basic_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/Low-resolution/basic_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = basic_overlay.png\noverlay1_overlay = basic_quickmenu_small.png\noverlay2_overlay = basic_next.png\n\noverlay0_full_screen = true\noverlay1_full_screen = true\noverlay2_full_screen = true\n\noverlay0_descs  = 15\noverlay0_rect   = \"0,0.375,1,0.625\"\noverlay0_desc0  = \"left,15,210,rect,10,30\"\noverlay0_desc1  = \"right,60,210,rect,10,30\"\noverlay0_desc2  = \"up,38,188,rect,30,10\"\noverlay0_desc3  = \"down,38,231,rect,30,10\"\noverlay0_desc4  = \"l,8,113,radial,20,20\"\noverlay0_desc5  = \"l2,8,59,radial,20,20\"\noverlay0_desc6  = \"r,246,113,radial,20,20\"\noverlay0_desc7  = \"r2,246,59,radial,20,20\"\noverlay0_desc8  = \"select,91,168,radial,10,10\"\noverlay0_desc9  = \"start,134,168,radial,10,10\"\noverlay0_desc10 = \"b,200,237,radial,30,30\"\noverlay0_desc11 = \"a,234,210,radial,30,30\"\noverlay0_desc12 = \"x,200,180,radial,30,30\"\noverlay0_desc13 = \"y,163,210,radial,30,30\"\noverlay0_desc14 = \"overlay_next,116,240,radial,16,16\"\n\noverlay1_descs  = 11\noverlay1_rect   = \"0,0.375,1,0.625\"\noverlay1_desc0  = \"load_state,60,39,rect,50,20\"\noverlay1_desc1  = \"save_state,163,39,rect,50,20\"\noverlay1_desc2  = \"state_slot_decrease,60,81,rect,50,20\"\noverlay1_desc3  = \"state_slot_increase,163,81,rect,50,20\"\noverlay1_desc4  = \"rewind,60,123,rect,50,20\"\noverlay1_desc5  = \"slowmotion,163,123,rect,50,20\"\noverlay1_desc6  = \"reset,60,165,rect,50,20\"\noverlay1_desc7  = \"toggle_fast_forward,163,165,rect,50,20\"\noverlay1_desc8  = \"shader_next,60,207,rect,50,20\"\noverlay1_desc9  = \"shader_prev,163,207,rect,50,20\"\noverlay1_desc10 = \"overlay_next,116,240,radial,16,16\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.44,0.90625,0.12,0.075\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Opium_2",
        "path": "gamepads/old/Low-resolution/opium_2.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/Low-resolution/opium_2.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/Low-resolution/basic_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/Low-resolution/basic_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = opium_2.png\noverlay1_overlay = basic_quickmenu_small.png\noverlay2_overlay = basic_next.png\n\noverlay0_full_screen = true\n\noverlay0_descs = 15\noverlay0_desc0  = \"left,15,210,rect,10,30\"\noverlay0_desc1  = \"right,60,210,rect,10,30\"\noverlay0_desc2  = \"up,38,188,rect,30,10\"\noverlay0_desc3  = \"down,38,231,rect,30,10\"\noverlay0_desc4  = \"l,8,113,radial,20,20\"\noverlay0_desc5  = \"l2,8,59,radial,20,20\"\noverlay0_desc6  = \"r,246,113,radial,20,20\"\noverlay0_desc7  = \"r2,246,59,radial,20,20\"\noverlay0_desc8  = \"select,91,168,radial,10,10\"\noverlay0_desc9  = \"start,134,168,radial,10,10\"\noverlay0_desc10 = \"b,200,237,radial,30,30\"\noverlay0_desc11 = \"a,234,210,radial,30,30\"\noverlay0_desc12 = \"x,200,180,radial,30,30\"\noverlay0_desc13 = \"y,163,210,radial,30,30\"\noverlay0_desc14 = \"overlay_next,116,240,radial,16,16\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,60,39,rect,50,20\"\noverlay1_desc1  = \"save_state,163,39,rect,50,20\"\noverlay1_desc2  = \"state_slot_decrease,60,81,rect,50,20\"\noverlay1_desc3  = \"state_slot_increase,163,81,rect,50,20\"\noverlay1_desc4  = \"rewind,60,123,rect,50,20\"\noverlay1_desc5  = \"slowmotion,163,123,rect,50,20\"\noverlay1_desc6  = \"reset,60,165,rect,50,20\"\noverlay1_desc7  = \"toggle_fast_forward,163,165,rect,50,20\"\noverlay1_desc8  = \"shader_next,60,207,rect,50,20\"\noverlay1_desc9  = \"shader_prev,163,207,rect,50,20\"\noverlay1_desc10 = \"overlay_next,116,240,radial,16,16\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.44,0.85,0.12,0.12\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Opium_3",
        "path": "gamepads/old/Low-resolution/opium_3.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/Low-resolution/opium_3.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/Low-resolution/basic_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/Low-resolution/basic_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = opium_3.png\noverlay1_overlay = basic_quickmenu_small.png\noverlay2_overlay = basic_next.png\n\noverlay0_full_screen = true\n\noverlay0_descs = 15\noverlay0_desc0  = \"left,15,210,rect,10,30\"\noverlay0_desc1  = \"right,60,210,rect,10,30\"\noverlay0_desc2  = \"up,38,188,rect,30,10\"\noverlay0_desc3  = \"down,38,231,rect,30,10\"\noverlay0_desc4  = \"l,8,113,radial,20,20\"\noverlay0_desc5  = \"l2,8,59,radial,20,20\"\noverlay0_desc6  = \"r,246,113,radial,20,20\"\noverlay0_desc7  = \"r2,246,59,radial,20,20\"\noverlay0_desc8  = \"select,91,168,radial,10,10\"\noverlay0_desc9  = \"start,134,168,radial,10,10\"\noverlay0_desc10 = \"b,200,237,radial,30,30\"\noverlay0_desc11 = \"a,234,210,radial,30,30\"\noverlay0_desc12 = \"x,200,180,radial,30,30\"\noverlay0_desc13 = \"y,163,210,radial,30,30\"\noverlay0_desc14 = \"overlay_next,116,240,radial,16,16\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,60,39,rect,50,20\"\noverlay1_desc1  = \"save_state,163,39,rect,50,20\"\noverlay1_desc2  = \"state_slot_decrease,60,81,rect,50,20\"\noverlay1_desc3  = \"state_slot_increase,163,81,rect,50,20\"\noverlay1_desc4  = \"rewind,60,123,rect,50,20\"\noverlay1_desc5  = \"slowmotion,163,123,rect,50,20\"\noverlay1_desc6  = \"reset,60,165,rect,50,20\"\noverlay1_desc7  = \"toggle_fast_forward,163,165,rect,50,20\"\noverlay1_desc8  = \"shader_next,60,207,rect,50,20\"\noverlay1_desc9  = \"shader_prev,163,207,rect,50,20\"\noverlay1_desc10 = \"overlay_next,116,240,radial,16,16\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.44,0.85,0.12,0.12\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Opium_4",
        "path": "gamepads/old/Low-resolution/opium_4.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/Low-resolution/opium_4.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/Low-resolution/basic_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/Low-resolution/basic_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = opium_4.png\noverlay1_overlay = basic_quickmenu_small.png\noverlay2_overlay = basic_next.png\n\noverlay0_full_screen = true\n\noverlay0_descs = 15\noverlay0_desc0  = \"left,15,210,rect,10,30\"\noverlay0_desc1  = \"right,60,210,rect,10,30\"\noverlay0_desc2  = \"up,38,188,rect,30,10\"\noverlay0_desc3  = \"down,38,231,rect,30,10\"\noverlay0_desc4  = \"l,8,113,radial,20,20\"\noverlay0_desc5  = \"l2,8,59,radial,20,20\"\noverlay0_desc6  = \"r,246,113,radial,20,20\"\noverlay0_desc7  = \"r2,246,59,radial,20,20\"\noverlay0_desc8  = \"select,91,168,radial,10,10\"\noverlay0_desc9  = \"start,134,168,radial,10,10\"\noverlay0_desc10 = \"b,200,237,radial,30,30\"\noverlay0_desc11 = \"a,234,210,radial,30,30\"\noverlay0_desc12 = \"x,200,180,radial,30,30\"\noverlay0_desc13 = \"y,163,210,radial,30,30\"\noverlay0_desc14 = \"overlay_next,116,240,radial,16,16\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,60,39,rect,50,20\"\noverlay1_desc1  = \"save_state,163,39,rect,50,20\"\noverlay1_desc2  = \"state_slot_decrease,60,81,rect,50,20\"\noverlay1_desc3  = \"state_slot_increase,163,81,rect,50,20\"\noverlay1_desc4  = \"rewind,60,123,rect,50,20\"\noverlay1_desc5  = \"slowmotion,163,123,rect,50,20\"\noverlay1_desc6  = \"reset,60,165,rect,50,20\"\noverlay1_desc7  = \"toggle_fast_forward,163,165,rect,50,20\"\noverlay1_desc8  = \"shader_next,60,207,rect,50,20\"\noverlay1_desc9  = \"shader_prev,163,207,rect,50,20\"\noverlay1_desc10 = \"overlay_next,116,240,radial,16,16\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.44,0.85,0.12,0.12\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Opium_5",
        "path": "gamepads/old/Low-resolution/opium_5.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/Low-resolution/opium_5.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/Low-resolution/basic_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/Low-resolution/basic_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = opium_5.png\noverlay1_overlay = basic_quickmenu_small.png\noverlay2_overlay = basic_next.png\n\noverlay0_full_screen = true\n\noverlay0_descs = 15\noverlay0_desc0  = \"left,15,210,rect,10,30\"\noverlay0_desc1  = \"right,60,210,rect,10,30\"\noverlay0_desc2  = \"up,38,188,rect,30,10\"\noverlay0_desc3  = \"down,38,231,rect,30,10\"\noverlay0_desc4  = \"l,8,113,radial,20,20\"\noverlay0_desc5  = \"l2,8,59,radial,20,20\"\noverlay0_desc6  = \"r,246,113,radial,20,20\"\noverlay0_desc7  = \"r2,246,59,radial,20,20\"\noverlay0_desc8  = \"select,91,168,radial,10,10\"\noverlay0_desc9  = \"start,134,168,radial,10,10\"\noverlay0_desc10 = \"b,200,237,radial,30,30\"\noverlay0_desc11 = \"a,234,210,radial,30,30\"\noverlay0_desc12 = \"x,200,180,radial,30,30\"\noverlay0_desc13 = \"y,163,210,radial,30,30\"\noverlay0_desc14 = \"overlay_next,116,240,radial,16,16\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,60,39,rect,50,20\"\noverlay1_desc1  = \"save_state,163,39,rect,50,20\"\noverlay1_desc2  = \"state_slot_decrease,60,81,rect,50,20\"\noverlay1_desc3  = \"state_slot_increase,163,81,rect,50,20\"\noverlay1_desc4  = \"rewind,60,123,rect,50,20\"\noverlay1_desc5  = \"slowmotion,163,123,rect,50,20\"\noverlay1_desc6  = \"reset,60,165,rect,50,20\"\noverlay1_desc7  = \"toggle_fast_forward,163,165,rect,50,20\"\noverlay1_desc8  = \"shader_next,60,207,rect,50,20\"\noverlay1_desc9  = \"shader_prev,163,207,rect,50,20\"\noverlay1_desc10 = \"overlay_next,116,240,radial,16,16\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.44,0.85,0.12,0.12\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Opium_5B",
        "path": "gamepads/old/Low-resolution/opium_5b.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/Low-resolution/opium_5b.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/Low-resolution/basic_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/Low-resolution/basic_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = opium_5b.png\noverlay1_overlay = basic_quickmenu_small.png\noverlay2_overlay = basic_next.png\n\noverlay0_full_screen = true\n\noverlay0_descs = 15\noverlay0_desc0  = \"left,15,210,rect,10,30\"\noverlay0_desc1  = \"right,60,210,rect,10,30\"\noverlay0_desc2  = \"up,38,188,rect,30,10\"\noverlay0_desc3  = \"down,38,231,rect,30,10\"\noverlay0_desc4  = \"l,8,113,radial,20,20\"\noverlay0_desc5  = \"l2,8,59,radial,20,20\"\noverlay0_desc6  = \"r,246,113,radial,20,20\"\noverlay0_desc7  = \"r2,246,59,radial,20,20\"\noverlay0_desc8  = \"select,91,168,radial,10,10\"\noverlay0_desc9  = \"start,134,168,radial,10,10\"\noverlay0_desc10 = \"b,200,237,radial,30,30\"\noverlay0_desc11 = \"a,234,210,radial,30,30\"\noverlay0_desc12 = \"x,200,180,radial,30,30\"\noverlay0_desc13 = \"y,163,210,radial,30,30\"\noverlay0_desc14 = \"overlay_next,116,240,radial,16,16\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,60,39,rect,50,20\"\noverlay1_desc1  = \"save_state,163,39,rect,50,20\"\noverlay1_desc2  = \"state_slot_decrease,60,81,rect,50,20\"\noverlay1_desc3  = \"state_slot_increase,163,81,rect,50,20\"\noverlay1_desc4  = \"rewind,60,123,rect,50,20\"\noverlay1_desc5  = \"slowmotion,163,123,rect,50,20\"\noverlay1_desc6  = \"reset,60,165,rect,50,20\"\noverlay1_desc7  = \"toggle_fast_forward,163,165,rect,50,20\"\noverlay1_desc8  = \"shader_next,60,207,rect,50,20\"\noverlay1_desc9  = \"shader_prev,163,207,rect,50,20\"\noverlay1_desc10 = \"overlay_next,116,240,radial,16,16\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.44,0.85,0.12,0.12\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Opium_6",
        "path": "gamepads/old/Low-resolution/opium_6.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/Low-resolution/opium_6.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/Low-resolution/basic_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/Low-resolution/basic_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = opium_6.png\noverlay1_overlay = basic_quickmenu_small.png\noverlay2_overlay = basic_next.png\n\noverlay0_full_screen = true\n\noverlay0_descs = 15\noverlay0_desc0  = \"left,15,210,rect,10,30\"\noverlay0_desc1  = \"right,60,210,rect,10,30\"\noverlay0_desc2  = \"up,38,188,rect,30,10\"\noverlay0_desc3  = \"down,38,231,rect,30,10\"\noverlay0_desc4  = \"l,8,113,radial,20,20\"\noverlay0_desc5  = \"l2,8,59,radial,20,20\"\noverlay0_desc6  = \"r,246,113,radial,20,20\"\noverlay0_desc7  = \"r2,246,59,radial,20,20\"\noverlay0_desc8  = \"select,91,168,radial,10,10\"\noverlay0_desc9  = \"start,134,168,radial,10,10\"\noverlay0_desc10 = \"b,200,237,radial,30,30\"\noverlay0_desc11 = \"a,234,210,radial,30,30\"\noverlay0_desc12 = \"x,200,180,radial,30,30\"\noverlay0_desc13 = \"y,163,210,radial,30,30\"\noverlay0_desc14 = \"overlay_next,116,240,radial,16,16\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,60,39,rect,50,20\"\noverlay1_desc1  = \"save_state,163,39,rect,50,20\"\noverlay1_desc2  = \"state_slot_decrease,60,81,rect,50,20\"\noverlay1_desc3  = \"state_slot_increase,163,81,rect,50,20\"\noverlay1_desc4  = \"rewind,60,123,rect,50,20\"\noverlay1_desc5  = \"slowmotion,163,123,rect,50,20\"\noverlay1_desc6  = \"reset,60,165,rect,50,20\"\noverlay1_desc7  = \"toggle_fast_forward,163,165,rect,50,20\"\noverlay1_desc8  = \"shader_next,60,207,rect,50,20\"\noverlay1_desc9  = \"shader_prev,163,207,rect,50,20\"\noverlay1_desc10 = \"overlay_next,116,240,radial,16,16\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.44,0.85,0.12,0.12\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Opium_7",
        "path": "gamepads/old/Low-resolution/opium_7.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/Low-resolution/opium_7.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/Low-resolution/basic_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/Low-resolution/basic_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = opium_7.png\noverlay1_overlay = basic_quickmenu_small.png\noverlay2_overlay = basic_next.png\n\noverlay0_full_screen = true\n\noverlay0_descs = 15\noverlay0_desc0  = \"left,15,210,rect,10,30\"\noverlay0_desc1  = \"right,60,210,rect,10,30\"\noverlay0_desc2  = \"up,38,188,rect,30,10\"\noverlay0_desc3  = \"down,38,231,rect,30,10\"\noverlay0_desc4  = \"l,8,113,radial,20,20\"\noverlay0_desc5  = \"l2,8,59,radial,20,20\"\noverlay0_desc6  = \"r,246,113,radial,20,20\"\noverlay0_desc7  = \"r2,246,59,radial,20,20\"\noverlay0_desc8  = \"select,91,168,radial,10,10\"\noverlay0_desc9  = \"start,134,168,radial,10,10\"\noverlay0_desc10 = \"b,200,237,radial,30,30\"\noverlay0_desc11 = \"a,234,210,radial,30,30\"\noverlay0_desc12 = \"x,200,180,radial,30,30\"\noverlay0_desc13 = \"y,163,210,radial,30,30\"\noverlay0_desc14 = \"overlay_next,116,240,radial,16,16\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,60,39,rect,50,20\"\noverlay1_desc1  = \"save_state,163,39,rect,50,20\"\noverlay1_desc2  = \"state_slot_decrease,60,81,rect,50,20\"\noverlay1_desc3  = \"state_slot_increase,163,81,rect,50,20\"\noverlay1_desc4  = \"rewind,60,123,rect,50,20\"\noverlay1_desc5  = \"slowmotion,163,123,rect,50,20\"\noverlay1_desc6  = \"reset,60,165,rect,50,20\"\noverlay1_desc7  = \"toggle_fast_forward,163,165,rect,50,20\"\noverlay1_desc8  = \"shader_next,60,207,rect,50,20\"\noverlay1_desc9  = \"shader_prev,163,207,rect,50,20\"\noverlay1_desc10 = \"overlay_next,116,240,radial,16,16\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.44,0.85,0.12,0.12\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    },
    {
        "name": "Opium_8",
        "path": "gamepads/old/Low-resolution/opium_8.cfg",
        "modes": [
            {
                "name": "Mode 0",
                "image": "gamepads/old/Low-resolution/opium_8.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 1",
                "image": "gamepads/old/Low-resolution/basic_quickmenu_small.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            },
            {
                "name": "Mode 2",
                "image": "gamepads/old/Low-resolution/basic_next.png",
                "orientation": "landscape",
                "viewport": {
                    "x": null,
                    "y": null,
                    "w": null,
                    "h": null
                }
            }
        ],
        "content": "overlays = 3\n\noverlay0_overlay = opium_8.png\noverlay1_overlay = basic_quickmenu_small.png\noverlay2_overlay = basic_next.png\n\noverlay0_full_screen = true\n\noverlay0_descs = 15\noverlay0_desc0  = \"left,15,210,rect,10,30\"\noverlay0_desc1  = \"right,60,210,rect,10,30\"\noverlay0_desc2  = \"up,38,188,rect,30,10\"\noverlay0_desc3  = \"down,38,231,rect,30,10\"\noverlay0_desc4  = \"l,8,113,radial,20,20\"\noverlay0_desc5  = \"l2,8,59,radial,20,20\"\noverlay0_desc6  = \"r,246,113,radial,20,20\"\noverlay0_desc7  = \"r2,246,59,radial,20,20\"\noverlay0_desc8  = \"select,91,168,radial,10,10\"\noverlay0_desc9  = \"start,134,168,radial,10,10\"\noverlay0_desc10 = \"b,200,237,radial,30,30\"\noverlay0_desc11 = \"a,234,210,radial,30,30\"\noverlay0_desc12 = \"x,200,180,radial,30,30\"\noverlay0_desc13 = \"y,163,210,radial,30,30\"\noverlay0_desc14 = \"overlay_next,116,240,radial,16,16\"\n\noverlay1_descs = 11\noverlay1_desc0  = \"load_state,60,39,rect,50,20\"\noverlay1_desc1  = \"save_state,163,39,rect,50,20\"\noverlay1_desc2  = \"state_slot_decrease,60,81,rect,50,20\"\noverlay1_desc3  = \"state_slot_increase,163,81,rect,50,20\"\noverlay1_desc4  = \"rewind,60,123,rect,50,20\"\noverlay1_desc5  = \"slowmotion,163,123,rect,50,20\"\noverlay1_desc6  = \"reset,60,165,rect,50,20\"\noverlay1_desc7  = \"toggle_fast_forward,163,165,rect,50,20\"\noverlay1_desc8  = \"shader_next,60,207,rect,50,20\"\noverlay1_desc9  = \"shader_prev,163,207,rect,50,20\"\noverlay1_desc10 = \"overlay_next,116,240,radial,16,16\"\n\noverlay2_descs = 1\noverlay2_rect = \"0.44,0.85,0.12,0.12\"\noverlay2_desc0 = \"overlay_next,16,16,radial,16,16\"\n"
    }
];