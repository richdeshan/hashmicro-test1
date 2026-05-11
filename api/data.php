<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$articles = [
    [
        "category" => "Repice",
        "title" => "AUTUMN CHESTNUT RICE",
        "date" => "August 7, 2015",
        "image" => "/src/assets/cheesenut-rice.jpeg"
    ],
    [
        "category" => "Repice / Stories",
        "title" => "TRAVEL THE WORD",
        "date" => "August 20, 2015",
        "image" => "/src/assets/travel.jpg"
    ],
    [
        "category" => "Stories",
        "title" => "DIARY OF MINE",
        "date" => "August 18, 2015",
        "image" => "/src/assets/diary.jpeg"
    ],
    [
        "category" => "Repice",
        "title" => "AUTUMN CHESTNUT RICE",
        "date" => "August 7, 2015",
        "image" => "/src/assets/cheesenut-rice.jpeg"
    ],
    [
        "category" => "Repice / Stories",
        "title" => "TRAVEL THE WORD",
        "date" => "August 20, 2015",
        "image" => "/src/assets/travel.jpg"
    ],
    [
        "category" => "Stories",
        "title" => "DIARY OF MINE",
        "date" => "August 18, 2015",
        "image" => "/src/assets/diary.jpeg"
    ],
    [
        "category" => "Repice",
        "title" => "AUTUMN CHESTNUT RICE",
        "date" => "August 7, 2015",
        "image" => "/src/assets/cheesenut-rice.jpeg"
    ],
    [
        "category" => "Repice / Stories",
        "title" => "TRAVEL THE WORD",
        "date" => "August 20, 2015",
        "image" => "/src/assets/travel.jpg"
    ],
    [
        "category" => "Stories",
        "title" => "DIARY OF MINE",
        "date" => "August 18, 2015",
        "image" => "/src/assets/diary.jpeg"
    ]
];

echo json_encode($articles);
?>