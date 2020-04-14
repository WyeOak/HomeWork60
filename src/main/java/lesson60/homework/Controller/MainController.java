package lesson60.homework.Controller;

import lesson60.homework.Model.Publication;
import lesson60.homework.Repository.PublicationRepository;
import lesson60.homework.Model.User;
import lesson60.homework.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import static org.apache.tomcat.util.http.fileupload.FileUploadBase.MULTIPART_FORM_DATA;


@Controller
public class MainController {
    @Autowired
    PublicationRepository publicationRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping("/demo")
    public String demo(Model model){
        return "index";
    }

    @GetMapping("/addPost")
    public String addPost(Model model){
        return "new_post";
    }

    @RequestMapping(value = "/addPost", method = RequestMethod.POST, consumes=MULTIPART_FORM_DATA)
    public final String addPost(@RequestParam("user_id") String user_id,
                                @RequestParam("description") String description,
                                @RequestParam("image") MultipartFile image) throws IOException {
        File imageFile = new File("src/main/resources/static/images/"+ image.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(imageFile);
        fos.write(image.getBytes());
        fos.close();

        User user = new User("some name", "some pass");
        user.setId(user_id);
        userRepository.save(user);

        Publication p = new Publication(user,image.getOriginalFilename(), description);
        publicationRepository.save(p);

        System.out.println("done");
        return "success";
    }
}

//    @PostMapping("/candidate")
//    public String rootSave(@RequestParam("name") String name,
//                           @RequestParam("photo") MultipartFile photo) throws IOException {
//        File photoFile = new File("src/main/resources/static/images/"+photo.getOriginalFilename());
//        //photoFile.createNewFile();
//        FileOutputStream os = new FileOutputStream(photoFile);
//        os.write(photo.getBytes());
//        os.close();
//
//        Candidate candidate = new Candidate(name, photo.getOriginalFilename());
//        repository.save(candidate);
//
//        return "success";
//    }