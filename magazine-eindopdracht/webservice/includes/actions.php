<?php
/**
 * @return array
 */
function getWatches(): array
{
    return [
        [
            "id" => 1,
            "number" => "SRPE55K1",
            "nickname" => "DressKX",
            "brand" => "Seiko",
        ],
        [
            "id" => 2,
            "number" => "SNXS79",
            "nickname" => "Rolex-Killer",
            "brand" => "Seiko",
        ],
        [
            "id" => 3,
            "number" => "L48014",
            "brand" => "Longines",
        ],
        [
            "id" => 4,
            "number" => "MDV-107-1A2VEF",
            "nickname" => "Duro",
            "brand" => "Casio",
        ],
        [
            "id" => 5,
            "number" => "AE-1200WH-1AV",
            "nickname" => "Casio Royale",
            "brand" => "Casio",
        ],
        [
            "id" => 6,
            "number" => "A168WEM-2",
            "brand" => "Casio",
        ],
        [
            "id" => 7,
            "number" => "T2N647",
            "nickname" => "Weekender",
            "brand" => "Timex",
        ],
        [
            "id" => 8,
            "number" => "GA-2100-1A4",
            "nickname" => "Casioak",
            "brand" => "Casio",
        ],
        [
            "id" => 9,
            "number" => "DW-6900U-1",
            "brand" => "Casio",
        ],
        [
            "id" => 10,
            "number" => "NNQ3000QBE2ASB014",
            "nickname" => "Wild One Independence",
            "brand" => "Norqain",
        ]
    ];
}

/**
 * @param $id
 * @return array|false
 */
function getWatchDetails($id): array|false
{
    $tags = [
        1 => [
            "review" => "Great GADA watch. Can be worn with a suit but still sporty",
            "tags" => ['gada', 'automatic', 'analog', 'day-date']
        ],
        2 => [
            "review" => "Great on a jubilee bracelet. Would be perfect, but lacks hand-winding and water-resistance",
            "tags" => ['dress', 'automatic', 'budget', 'day-date', 'analog']
        ],
        3 => [
            "review" => "Dress watch with luxurious dial details",
            "tags" => ['automatic', 'entry-luxury', 'analog', 'dress', 'swiss']
        ],
        4 => [
            "review" => "Industry standard budget dive watch with 120-click dive bezel",
            "tags" => ['diver', 'budget', 'quartz', 'analog']
        ],
        5 => [
            "review" => "Ultimate watch for functionality",
            "tags" => ['world-time', 'day-date', 'chronograph', 'quartz', 'digital', 'perpetual-calendar']
        ],
        6 => [
            "review" => "The classic retro design with a playful color",
            "tags" => ['day-date', 'chronograph', 'quartz', 'digital', 'perpetual-calendar']
        ],
        7 => [
            "review" => "A casual light-weight field watch with simple analog function",
            "tags" => ['quartz', 'analog', 'indiglo']
        ],
        8 => [
            "review" => "A rugged sports watch that can take all kinds of abuse, including league of legends",
            "tags" => ['quartz', 'ana-digi', 'chronograph', 'day-date', 'perpetual-calendar', 'world-time']
        ],
        9 => [
            "review" => "The ultimate G-shock, the classic, from military reputation to cinematic appearances",
            "tags" => ['quartz', 'digital', 'chronograph', 'day-date', 'perpetual-calendar']
        ],
        10 => [
            "review" => "Unorthodox; made with revolutionary materials and ambitous design. Luxury for the gladiatorial athlete",
            "tags" => ['analog', 'skeleton', 'luxury', 'automatic', 'Swiss']
        ]
    ];

    return $tags[$id] ?? false;
}
