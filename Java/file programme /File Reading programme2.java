package File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Collectors;

public class Main {
	public static void main(String[] args) throws IOException {
		var path = Paths.get("/storage/emulated/0/Text.txt");//This statement should change if file path or name change
		if (!Files.exists(path)) {
			System.out.println("File " + path + " doesn't exist.");
			return;
		}
		String text = Files.readString(path);
		System.out.println(String.format("File content:\n%s", text));
	}
}
