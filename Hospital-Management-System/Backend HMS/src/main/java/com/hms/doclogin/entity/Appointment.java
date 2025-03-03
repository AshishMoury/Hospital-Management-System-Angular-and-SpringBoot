package com.hms.doclogin.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "appointments")
public class Appointment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String name;

	private String age;

	private String symptomps;

	private String number;

	public Appointment(long id, String name, String age, String symptomps, String number) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.symptomps = symptomps;
		this.number = number;
	}

	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getSymptomps() {
		return symptomps;
	}

	public void setSymptomps(String symptomps) {
		this.symptomps = symptomps;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

}
