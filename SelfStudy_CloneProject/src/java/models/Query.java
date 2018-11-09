/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

/**
 *
 * @author demonslight998
 */

public class Query {

	public static String Add_Group = "INSERT INTO FriendGroup (Name,Description) VALUES (?, ?)";
	public static String Select_Group = "SELECT * FROM dbo.FriendGroup";
	public static String Select_Contact = "SELECT * FROM dbo.Contact";
	public static String Add_Contact = "INSERT INTO dbo.Contact\n"
					+ "(\n"
					+ "    FirstName,\n"
					+ "    LastName,\n"
					+ "    CreatedDate,\n"
					+ "    PhoneNumber,\n"
					+ "    GroupID\n"
					+ ")\n"
					+ "VALUES\n"
					+ "(?, ?, ?, ?, ?)";
	public static String Delete_Contact = "DELETE dbo.Contact WHERE ID = ?";
	public static String Edit_Contact = "UPDATE dbo.Contact SET FirstName = ?, LastName = ?, CreatedDate = ?, PhoneNumber = ?, GroupID = ? WHERE ID = ? ";

}
