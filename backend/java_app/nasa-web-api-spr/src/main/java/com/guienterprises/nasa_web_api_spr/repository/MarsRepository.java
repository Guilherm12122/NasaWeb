package com.guienterprises.nasa_web_api_spr.repository;

import com.guienterprises.nasa_web_api_spr.domain.entity.Mars;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarsRepository extends JpaRepository<Mars, Integer> {
}
