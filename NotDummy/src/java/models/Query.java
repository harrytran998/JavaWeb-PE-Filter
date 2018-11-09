package models;

/**
 *
 * @author demonslight998
 */
public class Query {

	// Dummy
	public static String Dummy_Add = "INSERT INTO dbo.Dummy(DummyID,DummyName) VALUES (?, ?)";
	public static String Dummy_Select = "SELECT * FROM dbo.Dummy";
	public static String Dummy_Delete = "DELETE dbo.Dummy WHERE DummyID = ?";
	public static String Dummy_Update = "UPDATE dbo.Dummy SET DummyName = ? WHERE DummyID = ?";

	//User
	public static String User_Select = "SELECT * FROM dbo.Users";

	//List of roles NOT IN <=> User
//	public static String Not_Roles_User = "SELECT * FROM dbo.Roles WHERE roleid NOT IN (\n"
//					+ "	SELECT roleid FROM dbo.Role_User WHERE username = " + NotUserName + ")";

	// List features assign to Role
	public static String Features_Role = "SELECT f.* FROM dbo.Features f, dbo.Role_Feature rf "
							+ "WHERE f.featureid = rf.featureid AND rf.roleid = ";

	// Get Roles By Feature
	public static String Roles_Feature = "SELECT r.* FROM dbo.Role_Feature rf JOIN dbo.Roles r\n"
					+ "ON r.roleid = rf.roleid AND rf.featureid = ";

	// Get list features + Role assign to Username
	public static String User_Role_Feature = "SELECT u.username, r.roleid, r.rolename, f.url AS 'Features' FROM dbo.Users AS u JOIN dbo.Role_User AS ru\n"
					+ "JOIN  dbo.Roles AS r JOIN dbo.Role_Feature rf JOIN dbo.Features f\n"
					+ "ON f.featureid = rf.featureid\n"
					+ "ON rf.roleid = r.roleid\n"
					+ "ON r.roleid = ru.roleid\n"
					+ "ON ru.username = u.username\n"
					+ "WHERE u.username = ";

}
