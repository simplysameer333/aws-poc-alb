<p align="center">
  <img src="https://d1.awsstatic.com/partner-network/QuickStart/datasheets/corda-blockchain-architecture-on-aws.c64c5b243a62f2c9efde32e0cc337c045127fda2.png" alt="Corda AWS" width="500">
</p>

# Application Load Balacer using VPS

This project is used as a POC on architecture that deploy application load balancer on top web servers and application server. These load balancers are tested using Bastion Host.

# Pre-Requisites

* Knowledge of AWS concepts such as EC2, VPC, and ALB.

# Build deployments

* Build 2 version of frontend by chnaging aap.js inside 'todo' folder.
  ** Install all node packages - 'npm install'.
  ** Generetae front end deployment files 'npm run-script build'.
  ** These woul dbe deplyed 

* Build 2 version of SpringBoot deployment jar from 'java\employees' folders.
  ** Generate 2 jar files with different version and those would be deployed on different applications servers.

# Create AWS Architecture 
* Create VPN	
	** Create VPC with  4 subnet (2 private, 2 public) - myApp-VPC
	** Update RT name
	** Create new RT for private subnet           RT-Private, RT-Public
	** Add subnet in both RT (priavte and public) 
	** Create a Bastion EC2 machine public subnet. access of ssh from myip
	** Create SG for BaStion - Create newKeyGen	

* Create ELB
	** Create Load balancer for webserver ALB-Webserver. INtranet facing in public subnet.	
	** Create ALB-AppSever with attach SG-Bastion and All HTTP.
	** Find out IP (EC2-> Network interface) of ALB-Appserver and create SG to http from ALB-Appserver.
	
* Appserver ALB
	** Create EC2-AppServer-1 & EC2-AppServer2(Private Subnet)- Make sure Baistion and ALB-AppServer SG is added.
	** Putty KeyGen to generate ppk from pem (save as private key)
	** Upload it in peagent putty
	** Start putty in forwards agent 
	** Deploy application from Bastion to appServer-1 and appServer-2 (using S3)
	** Test application from Basiton, REST call.
	
	** Add machines to target group for ALB-AppServer (appsever EC2)
	** Create taget groups Appserver and app server, make sure while adding target groups correct port is defined spl for appServer (& for rest api for health).
	** IMPORTANT - Make sure health of all targets in target group are healthy.
	** Test REST api from Baistion to ALB-AppServer
	    curl http://10.0.0.29:9000/api/home
	
* Web Server
  ** Create load balancer for Webserver - ALB-Webserver.
	** Create ALB-Webserver with attach SG-Bastion and All HTTP.
	** Find out IP (EC2-> Network interface) of ALB-Webserver and create SG all http from ALB-Appserver.
	
* EC2 Webserver
	** Create EC2-Webserver-1 & EC2-Webserver-2(Private Subnet)- Make sure Baistion and ALB-Webserver SG (allow EC2 to be ** accessed by ALB)is added.
	** Install httpd on webserver
	** Update the AppServer DNS in your code.
	** login on EC2 using basiton and deploy the html files.
	** Add machines to target group for ALB-Webserver (appsever EC2)
	** Create taget groups Webserver and app server, make sure while adding target groups correct port is defined spl for appServer (& for rest api for health).
	** IMPORTANT - Make sure health of all targets in target group are healthy.

# Userfull commands	
  java -jar employees-0.0.1-SNAPSHOT.jar > app.log &
  ps -ef|grep java
  wget 'filename'
  sudo su
  yum update -y

  sudo alternatives --config java
  sudo yum install java-1.8.0

  yum install httpd -y 
  service httpd start

  chkconfig httpd on  [restart apache at start]
  cd /var/www/html


