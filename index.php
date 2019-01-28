<?php













?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Morpion</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/styles/style.css">

</head>
<body>
    <h1 class="container morpion mt-5">MORPION</h1>
    <div class="container player bg-info"></div>

    <table>
        <tr>
            <td class="case case1"></td>
            <td class="case case2"></td>
            <td class="case case3"></td>
        </tr>
        <tr>
            <td td class="case case4"></td>
            <td td class="case case5"></td>
            <td td class="case case6"></td>
        </tr>
        <tr>
            <td td class="case case7"></td>
            <td td class="case case8"></td>
            <td td class="case case9"></td>
        </tr>
    </table>

    <div class="container bg-danger resultat"></div>
    <div class="container bg-danger info"></div>
    <div class="container bg-danger info2"></div>
    <div class="container victory"></div>
    

    <script
    src="https://code.jquery.com/jquery-3.3.1.js"
    integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <script src="assets/js/base.js"></script>
</body>
</html>