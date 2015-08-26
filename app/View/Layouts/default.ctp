<!DOCTYPE html>
<html>
<head>
	<?php echo $this->Html->charset(); ?>
	<title>
	</title>
	<?php

		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->fetch('script');
	?>
	<link rel="stylesheet" href="<?php echo $this->base?>/css/style.css">
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

	<script src="http://code.jquery.com/jquery-1.11.3.js"></script>
	<script src="<?php echo $this->base?>/js/html2canvas.js"></script>
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	
	<script src="<?php echo $this->base?>/js/action.js"></script>
</head>
<body>
	

	<?php echo $this->Flash->render(); ?>

	<?php echo $this->fetch('content'); ?>
	<?php echo $this->element('sql_dump'); ?>
</body>
</html>
