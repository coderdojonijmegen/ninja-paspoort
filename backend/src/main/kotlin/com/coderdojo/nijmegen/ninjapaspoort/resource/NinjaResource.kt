package com.coderdojo.nijmegen.ninjapaspoort.resource

import com.coderdojo.nijmegen.ninjapaspoort.service.NinjaService
import com.coderdojo.nijmegen.ninjapaspoort.service.model.Achievement
import com.coderdojo.nijmegen.ninjapaspoort.service.model.Ninja
import io.swagger.annotations.Api
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/paspoort")
@Api(value = "ninja-paspoort", description = "Rest API for the ninja passport")
class NinjaResource(val ninjaService: NinjaService) {

    @GetMapping("/")
    fun findNinja(@RequestParam(value= "ninja-id") ninjaId: UUID): Ninja {
        return ninjaService.retrieveNinja(ninjaId);
    }

    @PostMapping("/")
    fun postNinja(@RequestParam(value= "ninja-id") ninjaId: UUID) {
        ninjaService.insertNinja(Ninja(ninjaId));
    }

    @PutMapping("/")
    fun addAchievement(@RequestParam(value= "ninja-id") ninja: UUID, @RequestBody() achievement: Achievement) {
        ninjaService.addAchievement(ninja, achievement)
    }
}
