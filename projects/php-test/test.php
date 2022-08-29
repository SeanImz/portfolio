<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PHP Test Page</title>
  </head>
  <body>
    <p>
      <?php

      //////////
      //Maths

        $calcA = 9 + 2 x 5 -11; //8
        $calcB = 18 / (3 x 6 - 9) x 3; //6
        $calcC = 3 x (24 / 2 - 3 x 4 + 2 x 6); //36

        $calcResult = array($calcA, $calcB, $calcC);

        print_r ( $calcResult );

      ///////////
      //LOOPS

        $i = 1;
        while ( $i <= 10 ) {
          echo "$i \n";
          $i++;
        }

        $colors = array( 'red', 'blue', 'green', 'yellow');
        $i = 0;
        while ( $i < sizeof( $colors ) ) {
          echo $colors[$i] ."\n";
          $i++;
        } 

        // Less code with forEach:

        foreach ( $colors as $color ) {
          echo "$color \n";
        }  

        //Associative array:
        $colors = array( 'best' => 'red', 'better' => 'blue', 'good' => 'green', 'ok' => 'yellow' );

        foreach ( $colors as $rank => $color ) {
          echo "$color is $rank \n";
        }  

        ////////////////
        // NESTED ARRAY

        $plants = array(
          'Cannas' => array( 'musifolia', 'patens', 'striata' ),
          'Gingers' => array( 'kahili', 'rubrum', 'stephen' ),
          'Bananas' => array( 'basjoo', 'sikkimensis', 'ventricosum' ),
          'Palms' => array( 'chusan', 'canary', 'fan' )
        );

        foreach( $plants as $plantType => $species) {
          echo "<p><b>$planttype:</b> ";
          $species_list = '';
          foreach( $species as $speciesName) {
            //echo "$speciesName, ";  (leaves comma on end of each line)
            $species_list .= "$speciesName, ";
          }
          $species_list = trim( $species_list, ', ');
          echo $species_list;
          echo '</p>';
        }

        ///////////////
        // FUNCTIONS

        function hello_world() {
          return "Hello World";
        }

        echo '<p>' . hello_world() . '</p>';

      ?>

      <?php
        function hello_world() {

          echo "Hello World";

        }
      ?>
      
      <p><?php hello_world(); ?></p>

      <?php
        function is_palindrome( $string ) {
          // $string = strtolower( $string ); add to one line below as third argument for cleaner code
          $string = str_replace( ' ', '', strtolower( $string ) );
          echo $string;
          return $string == strrev( $string )
        }

        var_dump( is_palindrome( "mum" ) );  // true
        var_dump( is_palindrome( "Race Car" ) );  // true with spaces removed and conversion to lowercase
        var_dump( is_palindrome( "Hello World!" ) );  // false
      ?>

      <?php
        function compare_numbers( $a, $b ) {
          // $result = false;
          // if( $a > $b ) {
          //   $result = $a;
          // } else if ( $b > $a ) {
          //   $result = $b;
          // } else {
          //   $result = $a;
          // } 
          // return $result;

          // OPTIMSED VERSION:
          if ($a >= $b) {
            return $a;
          }

          return $b;
        }

        var_dump( compare_numbers( 10, 5 ) );
        var_dump( compare_numbers( 10, 20 ) );
        var_dump( compare_numbers( 10, 10 ) );

      ?>

    </p>
  </body>
</html>
