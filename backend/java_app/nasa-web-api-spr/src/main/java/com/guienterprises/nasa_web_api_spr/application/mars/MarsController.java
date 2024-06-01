package com.guienterprises.nasa_web_api_spr.application.mars;

import com.guienterprises.nasa_web_api_spr.application.apod.ApodDTO;
import com.guienterprises.nasa_web_api_spr.application.apod.ApodMapper;
import com.guienterprises.nasa_web_api_spr.domain.entity.Apod;
import com.guienterprises.nasa_web_api_spr.domain.entity.Mars;
import com.guienterprises.nasa_web_api_spr.domain.service.ApodService;
import com.guienterprises.nasa_web_api_spr.domain.service.MarsService;
import com.guienterprises.nasa_web_api_spr.repository.ApodRepository;
import com.guienterprises.nasa_web_api_spr.repository.MarsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/mars")
@Slf4j
@RequiredArgsConstructor
public class MarsController {
    private final MarsService marsService;
    private final MarsMapper mapper;

    @CrossOrigin(origins = "*")
    @GetMapping()
    public List<MarsDTO> getApod() {
        List<Mars> mars = marsService.searchMars();
        return mars.stream().map(mapper::marsDTO).collect(Collectors.toList());
    }
}
