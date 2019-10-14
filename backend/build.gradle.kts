import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import org.springframework.boot.gradle.tasks.bundling.BootJar

plugins {
	id("org.springframework.boot") version "2.1.9.RELEASE"
	id("io.spring.dependency-management") version "1.0.8.RELEASE"
	id("org.jetbrains.kotlin.plugin.spring") version "1.2.71"
	id("org.jetbrains.kotlin.plugin.jpa") version "1.2.71"

	kotlin("jvm") version "1.2.71"
	id("com.palantir.docker") version "0.22.1"
}

group = "com.coderdojo.nijmegen"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_1_8

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	runtimeOnly("org.postgresql:postgresql")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	implementation("io.springfox:springfox-swagger2:2.7.0")
	implementation("io.springfox:springfox-swagger-ui:2.7.0")
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "1.8"
	}
}

docker {
	val bootJar: BootJar by tasks
	val build by tasks

	dependsOn(build)
	name = "${project.group}/${bootJar.archiveBaseName.get()}"
	files(bootJar.archiveFile.get().asFile)
	buildArgs(mapOf("JAR_FILE" to bootJar.archiveFileName.get()))
}