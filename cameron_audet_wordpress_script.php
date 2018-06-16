//filename: functions.php

// include custom jQuery
function custom_jquery() {

	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.3.1.min.js', array(), null, true);

}
add_action('wp_enqueue_scripts', 'custom_jquery');


//if a newer jQuery version is needed for admin pages uncomment this line
//add_action( 'admin_enqueue_scripts', 'custom_jquery' );

//if a newer jQuery is needed to replace jquery-core while adding jquery-migrate uncomment the following function
//function replace_core_jquery_version() {

//    wp_deregister_script( 'jquery-core' );
//    wp_register_script( 'jquery-core', "https://code.jquery.com/jquery-3.1.1.min.js", array(), '3.1.1' );
//    wp_deregister_script( 'jquery-migrate' );
//    wp_register_script( 'jquery-migrate', "https://code.jquery.com/jquery-migrate-3.0.0.min.js", array(), '3.0.0' );

//} 