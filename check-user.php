<?php
header('Content-Type: application/json; charset=utf-8');

$existingUsernames = ['admin', 'john123', 'testuser'];
$existingEmails = ['admin@example.com', 'john@example.com', 'test@example.com'];

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'available' => false,
        'message' => 'Only POST requests are allowed.'
    ]);
    exit;
}

$type = $_POST['type'] ?? '';
$value = trim($_POST['value'] ?? '');

if (!in_array($type, ['username', 'email'], true) || $value === '') {
    http_response_code(400);
    echo json_encode([
        'available' => false,
        'message' => 'Invalid request.'
    ]);
    exit;
}

if ($type === 'username') {
    $exists = in_array(strtolower($value), array_map('strtolower', $existingUsernames), true);
    echo json_encode([
        'available' => !$exists,
        'message' => $exists ? 'Username already exists.' : 'Username is available.'
    ]);
    exit;
}

if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'available' => false,
        'message' => 'Please enter a valid email address.'
    ]);
    exit;
}

$exists = in_array(strtolower($value), array_map('strtolower', $existingEmails), true);
echo json_encode([
    'available' => !$exists,
    'message' => $exists ? 'Email already exists.' : 'Email is available.'
]);
?>