
import java.sql.Date;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author demonslight998
 */
public class User {
	private String username;
	private Date dateOfBirth;
	private boolean gender;
	private String job;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public boolean isGender() {
		return gender;
	}

	public void setGender(boolean gender) {
		this.gender = gender;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public User(String username, Date dateOfBirth, boolean gender, String job) {
		this.username = username;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.job = job;
	}

	public User() {
	}
}
