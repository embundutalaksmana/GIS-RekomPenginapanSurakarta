<?php

// Connect to the MySQL database
$conn = new mysqli('localhost', 'root', '', 'kelompokgis');

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve the data for all places
$sql = "SELECT * FROM tempatwisata";
$result = $conn->query($sql);

// Create an array to hold the GeoJSON features
$features = array();

if ($result->num_rows > 0) {
  // Loop through the rows and create a GeoJSON feature for each place
  while($row = $result->fetch_assoc()) {
    $feature = array(
      'type' => 'Feature',
      'properties' => array(
        'name' => $row['Nama']
      ),
      'geometry' => array(
        'type' => 'Point',
        'coordinates' => array($row['Y'], $row['X'])
      )
    );
    array_push($features, $feature);
  }
}

// Create a GeoJSON feature collection from the array of features
$feature_collection = array(
    'type' => 'FeatureCollection',
    'features' => $features
  );
  
  // Output the GeoJSON feature collection
  header('Content-Type: application/json');
  echo json_encode($feature_collection);
  
  $conn->close();
  