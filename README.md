本项目下载后要在根目录下输入npm install和npm install express mysql body-parser两个命令mysql数据

USE `test`;

/*Table structure for table `city` */

DROP TABLE IF EXISTS `city`;

CREATE TABLE `city` (
  `Cityid` int(11) NOT NULL AUTO_INCREMENT,
  `typeid` int(11) NOT NULL,
  `City` varchar(50) CHARACTER SET utf8 COLLATE utf8_estonian_ci NOT NULL,
  PRIMARY KEY (`Cityid`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;

/*Data for the table `city` */

insert  into `city`(`Cityid`,`typeid`,`City`) values (1,1,'北京'),(2,1,'上海'),(3,1,'广州'),(4,1,'深圳'),(5,1,'成都'),(6,2,'鞍山'),(7,2,'阿拉善盟'),(8,2,'安丘'),(9,2,'安庆'),(10,2,'安阳'),(11,2,'安陆'),(12,2,'阿坝'),(13,2,'安顺'),(14,2,'安宁'),(15,3,'北京'),(16,3,'保定'),(17,3,'包头'),(18,3,'宝鸡'),(19,3,'霸州'),(20,3,'本溪'),(21,3,'白山'),(22,3,'白城'),(23,3,'蚌埠'),(24,4,'成都'),(25,4,'重庆'),(26,4,'长沙'),(27,4,'澄迈'),(28,4,'长春'),(29,4,'沧州'),(30,4,'常州'),(31,4,'常德'),(32,4,'赤峰'),(33,5,'大连'),(34,5,'东莞'),(35,5,'儋州'),(36,5,'定安'),(37,5,'德阳'),(38,5,'大理'),(39,5,'丹东'),(40,5,'定州'),(41,5,'大同'),(42,6,'鄂尔多斯'),(43,6,'鄂州'),(44,6,'恩施'),(45,6,'恩平'),(46,7,'佛山'),(47,7,'福州'),(48,7,'阜阳'),(49,7,'抚顺'),(50,7,'丰城'),(51,7,'抚州');

/*Table structure for table `introduce` */

DROP TABLE IF EXISTS `introduce`;

CREATE TABLE `introduce` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `introduce` varchar(50) COLLATE utf8_estonian_ci DEFAULT NULL,
  `address` varchar(50) COLLATE utf8_estonian_ci DEFAULT NULL,
  `Price` varchar(50) COLLATE utf8_estonian_ci DEFAULT NULL,
  `UnitPrice` varchar(50) COLLATE utf8_estonian_ci DEFAULT NULL,
  `Label` varchar(50) COLLATE utf8_estonian_ci DEFAULT NULL,
  `introduceimg` varchar(255) COLLATE utf8_estonian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_estonian_ci CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DYNAMIC;

/*Data for the table `introduce` */

insert  into `introduce`(`id`,`introduce`,`address`,`Price`,`UnitPrice`,`Label`,`introduceimg`) values (1,'客村地铁100米广东教育学院宿舍低层两房','2室1厅/51.69㎡/南/广东教育学院','168万','32502元/平','满两年','../assets/index/26.gif'),(2,'晓港湾 正规两房房一厅 正望花园','2室1厅/40㎡/东/晓港湾明华苑','152万','38000元/平','满两年','../assets/index/26.gif'),(3,'正规两房 精致装修 看房方便刚需标配','2室1厅/54.86㎡/南/怡乐路','160万','29165元/平','满五年','../assets/index/26.gif'),(4,'海天花苑 温馨三房出售 格局方正','3室1厅/70.81㎡/南/海天花苑','260万','36718元/平','满两年','../assets/index/26.gif'),(5,'客村地铁100米 广东教育学院宿舍 低层两房','2室1厅/51.69㎡/南/广东教育学院','168万','32502元/平','满两年','../assets/index/26.gif'),(6,'沙东大街小两房','2室1厅/46.8㎡/南北/沙和路沙东大街','95万','20299元/平','满五年','../assets/index/26.gif'),(7,'高层北向望别墅群，精装修，保养好，看房方便有钥匙','3室1厅/91.58㎡/北/滨江绿园','263万','28718元/平','满五年','../assets/index/26.gif'),(8,'五羊小区 2室2厅 南','2室2厅/72㎡/南/五羊小区','335万','46528元/平','满五年','../assets/index/26.gif'),(9,'碧桂园物业 房子保养好 业主诚心出售未住过','3室1厅/78.48㎡/南/碧桂园物业','159万','46328元/平','满五年','../assets/index/26.gif'),(10,'新未住，南向看花园。房间都是东南','2室2厅/82.7㎡/南/亚运城媒体','226万','27354元/平','满二年','../assets/index/26.gif'),(11,'番同广场 温馨两房 700米到番同广场地铁口','2室2厅/72㎡/南/番同广场','203万','28782元/平','满二年','../assets/index/26.gif'),(12,'保利塞纳维拉 2室2厅 东南','2室2厅/70.52㎡/南/保利塞纳维拉','149万','26799元/平','满五年','../assets/index/26.gif');

/*Table structure for table `tool` */

DROP TABLE IF EXISTS `tool`;

CREATE TABLE `tool` (
  `toolid` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) COLLATE utf8_estonian_ci DEFAULT NULL,
  `tool` varchar(50) COLLATE utf8_estonian_ci DEFAULT NULL,
  PRIMARY KEY (`toolid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_estonian_ci CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DYNAMIC;

/*Data for the table `tool` */

insert  into `tool`(`toolid`,`img`,`tool`) values (1,'../assets/index/17.gif','卖房'),(2,'../assets/index/18.gif','找小区'),(3,'../assets/index/19.gif','查成交'),(4,'../assets/index/20.gif','去估价'),(5,'../assets/index/21.gif','找经纪人'),(6,'../assets/index/22.gif','问答'),(7,'../assets/index/23.gif','百科'),(8,'../assets/index/24.gif','客服电话'),(9,'../assets/index/25.gif','购房资质');

/*Table structure for table `type` */

DROP TABLE IF EXISTS `type`;

CREATE TABLE `type` (
  `typeid` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(11) CHARACTER SET utf8 COLLATE utf8_estonian_ci NOT NULL,
  PRIMARY KEY (`typeid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

/*Data for the table `type` */

insert  into `type`(`typeid`,`type`) values (1,'热'),(2,'A'),(3,'B'),(4,'C'),(5,'D'),(6,'E'),(7,'F'),(8,'G'),(9,'H'),(10,'J'),(11,'K'),(12,'L'),(13,'M'),(14,'N'),(15,'P'),(16,'Q'),(17,'R'),(18,'S'),(19,'T'),(20,'W'),(21,'X'),(22,'Y'),(23,'Z');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`username`,`password`) values (35,'18274005012','12345678'),(36,'18274005011','12345678'),(38,'18274005010','12345678');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

