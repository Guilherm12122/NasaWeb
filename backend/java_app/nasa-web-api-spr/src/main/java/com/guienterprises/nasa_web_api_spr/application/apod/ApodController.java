package com.guienterprises.nasa_web_api_spr.application.apod;

import com.guienterprises.nasa_web_api_spr.domain.entity.Apod;
import com.guienterprises.nasa_web_api_spr.repository.ApodRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/apod")
@Slf4j
@RequiredArgsConstructor
public class ApodController {
    private final ApodRepository apodRepository;

    @CrossOrigin(origins = "*")
    @GetMapping()
    public List<Apod> getApod(){
        return apodRepository.findAll();
    }

}
