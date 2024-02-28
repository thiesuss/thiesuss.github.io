//diese funktion geht leider nicht lol
function random_break($dir = 'breaks'){
    $files = glob($dir, '/*.*');
    $file = array_rand($files);
    return $files[$file];
}