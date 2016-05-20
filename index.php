<?php 
// Enter your page class name here
// It will then output into the body tag in 
// the header.php file
$pageTitle = 'Home';
include('templates/header.php'); 
?>
	
	<!-- start of main content -->
	<main class = "main-content">
		<!-- start of hero slider -->
		<section class = "hero-slider work">
			<!-- start of flexslider -->
				<div class = "workslider-large">
					<div class="flexslider">
		  				<ul class="slides">
		   			   		 <li><img src="./images/slide1.jpg" /></li>
		   			   		 <li><img src="./images/slide2.jpg" /></li>
		   			   		 <li><img src="./images/slide3.jpg" /></li>
		   			   		 <li><img src="./images/slide4.jpg" /></li>
		   			   		
		    			</ul>
					</div>
				<h2>Project Title</h2>
				<button><a href = "#">View Project</a></button>
			</div>
		</section> <!-- end of hero slider section -->
		
		<!-- start of secondary works -->
		<section class = "secondary-slider work">
				<!-- start of secondary works - flexslider left-->
				<div class = "workslider-small">
						<div class="flexslider">
	  						<ul class="slides">
		   			   		 	<li><img src="./images/slide1.jpg" /></li>
		   			   		 	<li><img src="./images/slide2.jpg" /></li>
		   			   		 	<li><img src="./images/slide3.jpg" /></li>
		   			 		    <li><img src="./images/slide4.jpg" /></li>
	   			   			</ul>
						</div>
					<h2>Project Title</h2>
					<button><a href = "#">View Project</a></button>
				</div> 

				<!-- start of secondar works flexslider right-->
				<div class = "workslider-small">
						<div class="flexslider">
		  					<ul class="slides">
		   			   		    <li><img src="./images/slide1.jpg" /></li>
		   			   		 	<li><img src="./images/slide2.jpg" /></li>
		   			   		 	<li><img src="./images/slide3.jpg" /></li>
		   			   		 	<li><img src="./images/slide4.jpg" /></li>
		   			   		</ul>
						</div>
				<h2>Project Title</h2>
				<button><a href = "#">View Project</a></button>
				</div> 
				
		</section> <!-- end of secondary slider section -->
		
	</main>

<?php include('templates/footer.php'); ?>
	
