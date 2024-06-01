package com.guienterprises.nasa_web_api_spr.application.apod;

import com.guienterprises.nasa_web_api_spr.domain.entity.Apod;
import com.guienterprises.nasa_web_api_spr.domain.service.ApodService;
import com.guienterprises.nasa_web_api_spr.repository.ApodRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/apod")
@Slf4j
@RequiredArgsConstructor
public class ApodController {
    private final ApodService apodService;
    private final ApodMapper mapper;

    @CrossOrigin(origins = "*")
    @GetMapping()
    public List<ApodDTO> getApod() {
        List<Apod> apods = apodService.searchApods();
        return apods.stream().map(mapper::apodDTO).collect(Collectors.toList());
    }
}
