	<?php
		$availableOptions = array("Добре дошли!" => 0, "Тип клауза" => 1);
		
		if ($obj->step <= 2){
			$availableOptions = array("Добре дошли!" => 0, "Тип клауза" => 1, "Примерна клауза" => 2);
		}
		else if($obj->typeOfArgument == "business"){
			$availableOptions = array("Добре дошли!" => 0, "Тип клауза" => 1, "Вашата клауза" => 2, "Брой арбитри" => 3, "Квалификации на арбитраж" => 4, "Приложимо право" => 5, 
				"Откритие" => 6, "Документи само за изслушване" => 7, "Продължителност на арбитражното производство" => 8,
				"Средства за правна защита" => 9, "Оценка на форумните такси и адвокатските такси" => 10,
				"Становище, придружаващо наградата" => 11, "Поверителност" => 12, "Неплащане на арбитражни разходи" => 13,
				"Обжалване" => 14);
		}
		else if($obj->typeOfArgument == "domain"){
			$availableOptions = array("Добре дошли!" => 0, "Тип клауза" => 1, "Вашата клауза" => 2,
			 "Брой арбитри" => 3, "Квалификации на арбитраж" => 4,  "Поверителност" => 12);
		}

		if (isset($_GET['goto'])){
				$obj->step = $_GET['goto'];
				$_SESSION['obj'] = serialize($obj);
				echo "<meta http-equiv=\"refresh\" content=\"0;URL=index.php\">";
		}

		if($obj->agreement == 0) {
			$isDisabled="disabled";
		}
		else{
			$isDisabled = 'enabled';
		}
	?>

	<link rel="stylesheet" href="sidebar/sidebar_styles.css">

	<form action="index.php" method="post">
			<div class="start_over_button_container">
				<button class="button start_over_button" type="submit" name="clear_cookies"><i class="fas fa-chevron-left"></i>Започни отначало!</button>
			</div>
		</form>
		
		<h2>Навигация</h2>
		<ul>
			<?php foreach ($availableOptions as $key => $value):?>
				
				<?php if ($obj->step == $value): ?>
					
					<li class="curr-item enabled"> <i class="far fa-arrow-alt-circle-right"></i> <?php echo $key;?> </li> 
				<?php else: ?>
					
					<a href="<?php if ($isDisabled == 'enabled'){ echo '?goto=' . $value; }?>"> <li class="<?php echo $isDisabled?>"> <i class="far fa-arrow-alt-circle-right"></i> <?php echo $key;?> </li></a> 
				<?php endif; ?>

			<?php endforeach; ?>
		</ul>

